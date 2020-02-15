/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var uuid = require("uuid4");
var lti = require("ims-lti");

var fs = require('fs');
var mod2File = fs.readFileSync("content/module1.html", "utf8");

// create a new express server
var app = express();
var sessions = {};

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.post("*", require("body-parser").urlencoded({extended: true}));

app.post("/module_1", (req, res) => {
  var moodleData = new lti.Provider("top", "secret");
  moodleData.valid_request(req, (err, isValid) => {
    if (!isValid) {
      res.send("Invalid request: " + err);
      return ;
    }

    var sessionID = uuid();
    sessions[sessionID] = moodleData;

    var sendMe = mod2File.toString().replace("//PARAMS**GO**HERE",
      `
					const params = {
						sessionID: "${sessionID}",
						user: "${moodleData.body.ext_user_username}"
					};
				`);

    res.setHeader("Content-Type", "text/html");
    res.send(sendMe);
  });   // moodleDate.valid_request
});       // app.post("/module_2");

app.get("/grade/:sessionID/:grade", (req, res) => {
  const session = sessions[req.params.sessionID];
  var grade = req.params.grade;
  var resp;

  if (grade < 60) {
    resp = `${grade} is too low. How about sixty instead?`;
    grade = 60;
  } else if (grade > 90) {
    resp = `${grade} is too high. How about ninety instead?`;
    grade = 90;
  } else {
    resp = `${grade} sounds reasonable, sure.`;
  }

  session.outcome_service.send_replace_result(grade/100, (err, isValid) => {
    if (!isValid)
      resp += `<br/>Update failed ${err}`;

    res.send(resp);
  });

});    // app.get("/grade...")

// start srver on localhost

app.listen(3000, 'localhost', function() {
  console.log("server is up");
});

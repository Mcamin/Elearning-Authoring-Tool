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

var mod2FileIndex = fs.readFileSync("content/index.html", "utf8");
var mod2FileGrade = fs.readFileSync("content/grade.html", "utf8");
var mod2FileRadio = fs.readFileSync("content/radio.html", "utf8");
var mod2FileTest = fs.readFileSync("content/test.html", "utf8");

// create a new express server
var app = express();
var sessions = {};

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.post("*", require("body-parser").urlencoded({extended: true}));

app.get('/index/:radioID', (req, res) => {
  //const session = sessions[req.params.sessionID];
  const sessionID = req.query.sessionID;
  var sendMe = mod2FileRadio.toString()

  res.setHeader("Content-Type", "text/html");
  res.send(sendMe);

});

app.post("/index", (req, res) => {
  var moodleData = new lti.Provider("top", "secret");
  moodleData.valid_request(req, (err, isValid) => {
    if (!isValid) {
      res.send("Invalid request: " + err);
      return ;
    }
    var sessionID = uuid();
    sessions[sessionID] = moodleData;

    var sendMe = mod2FileIndex.toString().replace("//PARAMS**GO**HERE",
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

app.get("/grade", (req, res) => {
  var moodleData = new lti.Provider("top", "secret");
  moodleData.valid_request(req, (err, isValid) => {
    if (!isValid) {
      res.send("Invalid request: " + err);
      return ;
    }
    var sessionID = uuid();
    sessions[sessionID] = moodleData;

    var sendMe = mod2FileGrade.toString().replace("//PARAMS**GO**HERE",
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

//------------------------------------------------------------------------------
// Radio Button
//------------------------------------------------------------------------------

app.post("/radio", (req, res) => {
  var moodleData = new lti.Provider("top", "secret");
  moodleData.valid_request(req, (err, isValid) => {
    if (!isValid) {
      res.send("Invalid request: " + err);
      return ;
    }
    var sessionID = uuid();
    sessions[sessionID] = moodleData;

    var sendMe = mod2FileRadio.toString().replace("//PARAMS**GO**HERE",
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

app.get("/radio/:sessionID/:radioresult", (req, res) => {
  const session = sessions[req.params.sessionID];
  var radio = req.params.radioresult;
  var resp;
  var grade;

  if (radio === "Button Eins") {
    resp = `${radio} is the correct answer`;
    grade = 100;
  } else {
    resp = `${radio} is wrong`;
    grade = 0;
  }

  session.outcome_service.send_replace_result(grade/100, (err, isValid) => {
    if (!isValid)
      resp += `<br/>Update failed ${err}`;

    res.send(resp);
  });

});    // app.get("/grade...")
// start srver on localhost

//------------------------------------------------------------------------------
// Multiple Choice
//------------------------------------------------------------------------------

app.listen(3000, 'localhost', function() {
  console.log("LTI provider server is up");
});

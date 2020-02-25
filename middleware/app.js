const express = require('express');
const app = express();
const uuid = require("uuid4");
const lti = require("ims-lti");
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const getimstool = require('./api');

var mod2FileIndex = fs.readFileSync("templates/index.html", "utf8");
var mod2FileGrade = fs.readFileSync("templates/grade.html", "utf8");
var mod2FileRadio = fs.readFileSync("templates/radio.html", "utf8");
var mod2FileTest = fs.readFileSync("templates/test.html", "utf8");

//Dev
app.use(morgan("dev"));



//Parsers
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

let sessions = {};

app.post("/resourceType/:toolID", (req, res) => {
     // Get the consumer key from the database
    let imstool = getimstool(req.params.resourceType,req.params.toolID);
    if(imstool.meta.hasOwnProperty(req.body.oauth_consumer_key))
    { let username = req.body.oauth_consumer_key,
      password = imstool.meta[req.body.oauth_consumer_key];
      let moodleData = new lti.Provider(username, password);

      moodleData.valid_request(req, (err, isValid) => {
        if (!isValid) {
          // Serve the 404 page
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
      });
    }

});





app.post("/index", (req, res) => {
  // Get the consumer key from the database
  let imstool = getimstool();
  var moodleData = new lti.Provider("top", "secret");
  moodleData.valid_request(req, (err, isValid) => {
    if (!isValid) {
      res.send("Invalid request: " + err);
      return ;
    }
    var sessionID = uuid();
    sessions[sessionID] = moodleData;
 //Use pug templates to render the page
    var sendMe = mod2FileIndex.toString().replace("//PARAMS**GO**HERE",
      `
					const params = {
						sessionID: "${sessionID}",
						user: "${moodleData.body.ext_user_username}"
					};
				`);

    res.setHeader("Content-Type", "text/html");
    res.send(sendMe);
  });
});

app.get("/test", (req, res) => {
  //var moodleData = new lti.Provider("top", "secret");
    var sessionID = uuid();
    //sessions[sessionID] = moodleData;

    var sendMe = mod2FileTest.toString().replace("//PARAMS**GO**HERE",
      `
					const params = {
						sessionID: "${sessionID}",
					};
				`);

    res.setHeader("Content-Type", "text/html");
    res.send(sendMe);
           // moodleDate.valid_request
});       // app.post("/module_2");



app.get("/grade/:sessionID/:grade", (req, res) => {
  const session = sessions[req.params.sessionID];
  var grade = req.params.grade;
  console.log(req.params);
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
});

app.post("/assess/:sessionID/:grade", (req, res) => {
  const session = sessions[req.params.sessionId];
  //get the interaction from the database
  //check the answer if correct
  // send the Feedback to show
  // update the grade of the resource depending on the number of quizes and interactions it has
  let Feedbackcontent ="";

  session.outcome_service.send_replace_result(grade/100, (err, isValid) => {
    if (!isValid)
      resp += `<br/>Update failed ${err}`;

    res.send(Feedbackcontent);
  });
});    // app.get("/grade...")
// start srver on localhost

//------------------------------------------------------------------------------
// Multiple Choice
//------------------------------------------------------------------------------



module.exports = app;

const uuid = require("uuid4");
const lti = require("ims-lti");
const morgan = require('morgan');
const fs = require('fs');

const getimstool = require('../utils');

var mod2FileIndex = fs.readFileSync("./templates/index.html", "utf8");
//var mod2FileGrade = fs.readFileSync("templates/multipleChoice.html", "utf8");
//var mod2FileRadio = fs.readFileSync("templates/singleChoice.html", "utf8");
//var mod2FileTest = fs.readFileSync("templates/test.html", "utf8");
var mod2FileSingleChoice = fs.readFileSync("./templates/singleChoice.html", "utf8");


let sessions = {};

exports.playground =  (req, res) => {

  let testObjs = [{id:1},{id:2},{id:3}];
  res.render('start', {title:'Hello',testObjs: testObjs});
};


exports.initialize_communication = (req, res) => {
  // Dummy to remove
  let imsTool = {
    title: "Tool title",
    meta: {top: "secret"}
  };
  // Get the consumer key from the database
  //let imsTool = getimstool(req.params.resourceType,req.params.toolID);
  if (imsTool.meta.hasOwnProperty(req.body.oauth_consumer_key)) {

    let username = req.body.oauth_consumer_key,
      password = imsTool.meta[req.body.oauth_consumer_key];

    let moodleData = new lti.Provider(username, password);

    /*moodleData.valid_request(req, (err, isValid) => {
      if (!isValid) {
        // Serve the 404 page
        res.send("Invalid request: " + err);
        return;
      }
      let sessionID = uuid();
      sessions[sessionID] = moodleData;

      const params = {
						sessionID: sessionID,
						user: moodleData.body.ext_user_username
					};


      res.render('start', {title:imsTool.title,params:params});
    });*/
    let sessionID = uuid();
    const params = {
      sessionID: sessionID,
      user: moodleData.body.ext_user_username
    };

    res.render('start', {title:imsTool.title,params:params});
  }

};


exports.fetchcontent = (req,res) => {

  var sendMe = mod2FileSingleChoice.toString();

  res.setHeader("Content-Type", "text/html");
  res.send(sendMe);

};


exports.sendFeedback =  (req, res) => {
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

  session.outcome_service.send_replace_result(grade / 100, (err, isValid) => {
    if (!isValid)
      resp += `<br/>Update failed ${err}`;

    res.send(resp);
  });
};



exports.asses_quiz = (req, res) => {
  let session = sessions[req.body.sessionId],
    interactionId = req.body.interactionId,
    questionId = req.body.questionID,
    selectedAnswer = req.body.selectedAnswer,
    feedbackContent = "",
    grade = 0;
  //get the interaction from the database
  //check the answer if correct
  // send the Feedback to show
  // update the grade of the resource depending on the number of quizes and interactions it has


  session.outcome_service.send_replace_result(grade / 100, (err, isValid) => {
    if (!isValid)
      feedbackContent += `<br/>Update failed ${err}`;

    res.send(feedbackContent);
  });
};

exports.initialize = (req, res) => {
  // Dummy to remove
  let imsTool = {
    title: "Tool title",
    meta: {top: "secret"}
  };
  // Get the consumer key from the database
  //let imsTool = getimstool(req.params.resourceType,req.params.toolID);
  if (imsTool.meta.hasOwnProperty(req.body.oauth_consumer_key)) {

    let username = req.body.oauth_consumer_key,
      password = imsTool.meta[req.body.oauth_consumer_key];

    let moodleData = new lti.Provider(username, password);

    moodleData.valid_request(req, (err, isValid) => {
      if (!isValid) {
        // Serve the 404 page
        res.send("Invalid request: " + err);
        return;
      }
      let sessionID = uuid();
      sessions[sessionID] = moodleData;

      const params = {
						sessionID: sessionID,
						user: moodleData.body.ext_user_username
					};
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
    /*let sessionID = uuid();
    const params = {
      sessionID: sessionID,
      user: moodleData.body.ext_user_username
    };

    res.render('start', {title:imsTool.title,params:params});*/
  }

};

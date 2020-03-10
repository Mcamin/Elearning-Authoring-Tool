const uuid = require("uuid4");
const lti = require("ims-lti");
const morgan = require('morgan');

const getimstool = require('../utils');

const functionHelper = (object) => {
  switch (object.pageType) {
    case "lesson":
      // get lesson by id
      //object.id
      let lesson = {};
      res.render('lesson', {lessonContent: lesson.lessonContent});
      break;
    case "interaction":
      //get interaction by id
      //object.id
      let interaction = {},
          questionData = interaction.question.filter(x => {
            x.id == page.nextQuestionId
          });
      if (questionData.type === "multipleChoice")
        res.render('multiplechoice', {question: questionData.question, answers: questionData.answers});
      else
        res.render('singlechoice', {question: questionData.question, answers: questionData.answers});
      break;
  }
};

  let course = {

    content: [
      {
        type: "section",
        section: [
          {
            module: [
              {
                pageType: "interaction",
                interaction: [
                  {
                    questionType: "multipleChoice",
                    question: [
                      {answer: "text", correct: true}
                    ],
                    questionText: "questiontext"
                  },
                  {
                    questionType: "singleChoice",
                    question: [
                      {answer: "text", correct: true}
                    ],
                    questionText: "questiontext"
                  }
                ]
              },
              {
                pageType: "lesson",
                lesson: "htmlText"
              }
            ]
          }
        ]
      },
      {
        type: "module",
        module: []
      },
    ]
  };

  let sessions = {};

  exports.initialize = (req, res) => {
    // Get the consumer key from the database
    //let imsTool = getimstool(req.params.resourceType,req.params.toolID);
    // Dummy to remove
    let imsTool = {
        title: course.title,
        description: course.description,
        meta: course.meta
      },
      // the next page to call
      firstContent = course.content[0],
      firstPage = {};
    switch (firstContent.type) {
      case "section":
        let firstModule = firstContent.module[0];
        firstPage = firstModule[0];
        functionHelper(firstPage);
        break;
      case "module":
        firstPage = firstContent.module[0];
        functionHelper(firstPage);
        break;
    }

    nextPage = {
      pageType: "lesson",
      pageId: "sfphoafpoashfpoa"
    };

    if (imsTool.meta.hasOwnProperty(req.body.oauth_consumer_key)) {

      let username = req.body.oauth_consumer_key,
        password = imsTool.meta[req.body.oauth_consumer_key];

      let moodleData = new lti.Provider(username, password);

      moodleData.valid_request(req, (err, isValid) => {
        if (!isValid) {
          // Serve the 404 page
          res.render('404', {err: err});
          return;
        }
        let sessionID = uuid();
        moodleData.courseContent = {};
        moodleData.courseGrade = 0;
        sessions[sessionID] = moodleData;

        const params = {
          sessionId: sessionID,
          user: moodleData.body.ext_user_username
        };


        res.render('start', {
          title: imsTool.title,
          description: imsTool.description,
          nextPage: JSON.stringify(nextPage),
          params: JSON.stringify(params)
        });

      });

    } else {
      res.render('404', {err: ''});
    }
  };



exports.getPage = (req, res) => {
  let page = req.body;
  //check if session exists
  // get page to render from database
  // get next page and set previous page from req
  // pass the content and the params to the template
    functionHelper(page);

};

exports.asses_quiz = (req, res) => {
  console.log(req.body);
  let session = sessions[req.body.sessionId],
    interactionId = req.body.interactionId,
    questionId = req.body.questionID,
    selectedAnswers = req.body.selectedAnswers,
    feedbackContent = {hello: "helloworld"},
    grade = 0;

  //get the interaction from the database
  //check the answer if correct by looping over all question answers
  // send the Feedback to show
  // update the grade of the resource depending on the number of quizes and interactions it has

  session.outcome_service.send_replace_result(grade / 100, (err, isValid) => {
    if (!isValid)
      feedbackContent += `<br/>Update failed ${err}`;

    res.send(JSON.stringify(feedbackContent));
  });
};


exports.delete_session = (req, res) => {
  console.log(req.body)
};


const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes import
const
  lessonRoutes = require('./api/routes/lesson'),
  interactionRoutes = require('./api/routes/interaction'),
  moduleRoutes = require('./api/routes/module'),
  sectionRoutes = require('./api/routes/section'),
  courseRoutes = require('./api/routes/course');

//Connect to DB
const mongoURI = 'mongodb+srv://' + process.env.MONGO_USR + ':' + process.env.MONGO_PW +
      '@cluster0-nylix.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,
});
mongoose.promise = global.promise;

//Dev
app.use(morgan("dev"));


//Folder to store assets
app.use('/api/courses/images', express.static('uploads/courses/images'));


//Parsers
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Handling Cors
app.use((req, res, next) => {
  // Set to the EAT url
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/api/lessons", lessonRoutes);
app.use("/api/interactions", interactionRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/courses", courseRoutes);
// Handling Errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

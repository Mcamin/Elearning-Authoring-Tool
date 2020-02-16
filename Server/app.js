const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const lessonRoutes = require('./api/routes/lessons');
const quizRoutes = require('./api/routes/interactions');

//Connect to DB
const mongoURI = 'mongodb+srv://'+process.env.MONGO_USR+':'+process.env.MONGO_PW+'@cluster0-nylix.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoURI,{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.promise = global.promise;
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
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

// Routes which should handle requests
app.use("/api/lessons", lessonRoutes);
app.use("/api/interactions", quizRoutes);

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

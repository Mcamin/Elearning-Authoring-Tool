const express = require('express');
const  app = express();
const morgan = require('morgan');


const lessonRoutes = require('./api/routes/lessons');
const quizRoutes = require('./api/routes/quizzes');

app.use(morgan('dev'));

//Routes to handle requests
app.use('/products',lessonRoutes);
app.use('/quizzes',quizRoutes);

app.use((req,res,next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error,req,res,next) => {
  res.status(error.status || 500);
  res.json({
    error:{
      message: error.message
    }
  })
});


module.exports = app;

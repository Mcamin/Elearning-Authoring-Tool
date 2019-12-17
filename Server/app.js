const express = require('express');
const  app = express();

const lessonRoutes = require('./api/routes/lessons');
app.use('/products',lessonRoutes);
const quizRoutes = require('./api/routes/quizzes');
app.use('/quizzes',quizRoutes);


module.exports = app;

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const lessonRoutes = require('./api/routes/lessons');
const quizRoutes = require('./api/routes/quizzes');

//Connect to DB
//const mongoURI = 'mongodb+srv://'+process.env.MONGO_USR+':'
//  +process.env.MONGO_PW+'@cluster0-nylix.mongodb.net/test?retryWrites=true&w=majority';

const mongoURI = 'mongodb://localhost:27017/eating';
mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true  } );

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

//app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

// Handling Cors
/*
app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header(
    'Account-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  //check the option request and send the allowed requests
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});
*/
//Routes to handle requests
//app.use('/lessons',lessonRoutes);
//app.use('/quizzes',quizRoutes);
/*
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
*/
//module.exports = app;

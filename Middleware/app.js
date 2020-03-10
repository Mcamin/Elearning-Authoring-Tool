const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// routes import
const
  imsTool = require('./api/routes/imsTool');

// Load View engine
app.set('views',path.join(__dirname, 'api/views'));
app.set('view engine', 'pug');



//Dev
app.use(morgan("dev"));


//Folder to store assets
app.use('/js', express.static('./public/js'));
app.use('/css', express.static('./public/css'));
app.use('/webfonts', express.static('./public/webfonts'));


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
    res.header("Access-Control-Allow-Methods", "POST, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/", imsTool);
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

const express = require('express');
const cookieSession = require("cookie-session");
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet'); // Enable better overall security
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize')
const secure = require('ssl-express-www');
const passport = require("passport");
require('https').globalAgent.options.rejectUnauthorized = false;
require("./passport");
const bodyParser = require("body-parser");



const { environment } = require('./config');
const isProduction = environment === 'production';

const routes = require('./routes');

const app = express();

app.use(secure);

app.use(morgan('dev'));
app.use(cookieParser()); // parsing cookies
app.use(express.json()); // parsing JSON bodies of requests with Content-Type of "application/json"
// app.use(express.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ extended: true }));


if (!isProduction) {
  app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
  })); // enable cors only in development
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}))

// app.use(helmet({
//   contentSecurityPolicy: false
// }));

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true // can't be read by Javascript
    }
  })
);

app.use(cookieSession(
  {
      name: "session",
      keys:["wanyi"],
      maxAge: 24 * 60 * 60 * 100
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// underscore infront of variables are telling people
// this is not necessary be used, but syntax needs it
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  // err.errors could be a string, but front end may expect an array
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }

  next(err);
});

// formatting all the errors before returning a JSON response
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});


module.exports = app;

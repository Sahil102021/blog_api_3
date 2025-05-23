var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userProfile = require('./routes/cruad');
var bookRouter = require("./routes/book");
var genreRouter = require("./routes/genre");
var publisherRouter = require("./routes/publisher");
var cors = require("cors");
let mongoose = require('mongoose');

var app = express();


mongoose.connect('mongodb://127.0.0.1:27017/demo1')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error.message));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userprofile', userProfile);
app.use('/book',bookRouter);
app.use('/genre',genreRouter);
app.use("/publisher",publisherRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

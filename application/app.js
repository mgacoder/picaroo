var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {engine} = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var errorPrint = require('./helpers/debug/debugPrinters').errorPrint;
var requestPrint = require('./helpers/debug/debugPrinters').requestPrint;

var app = express();

app.engine(
    'hbs',
    engine({
        layoutsDir: path.join(__dirname, 'views/layouts'),
        partialsDir: path.join(__dirname, 'views/partials'),
        extname: '.hbs',
        defaultLayout: 'home',
        helpers: {

        }
    })
);
app.set('view engine', 'hbs')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    requestPrint(req.url);
    next();
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use((err, req, res, next) => {
    console.log(err);
    res.render('error', {err_message: err})
})

module.exports = app;

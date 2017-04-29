var express = require("express"),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    fs = require('fs');


var app = express();

var login = require('./app/login');
var heroes = require('./app/heroe');
var frases = require('./app/frase');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());

app.use('/api', login);
app.use('/api/heroes', heroes);
app.use('/api/frases', frases);

var router = express.Router();

app.use(router);

app.listen(8080);
console.log("Server levantado en el puerto 3000");

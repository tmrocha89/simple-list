'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ListRouter = require('./router/listRouter');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/simple-list");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res){
    return res.json({message: "Working"});
});

app.use('/api', router);
app.use('/api/list', ListRouter);

app.listen(3001);
console.log("running");

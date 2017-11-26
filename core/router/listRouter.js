'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../schemas/List');
var List = mongoose.model('List');

module.exports = router;

router.get('/', function(req, res){
    List.find(function(err, lists){
        return res.send(err || lists);
    });
});

router.post('/', function(req, res){
    var name = req.body.name;
    var list = new List();
    if(name && name.trim().length > 0){
        list.name = name;
        list.save(function(err){
            return res.json(err || list);
        });
    }
});


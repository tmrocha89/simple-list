'use strict';
var express = require('express');
var router = express.Router();
var ListRepository = require('../repositories/ListRepository');

module.exports = router;

router.get('/', function(req, res){
    ListRepository.getAll(function(err, lists){
        return res.send(err || lists);
    });
});

router.post('/', function(req, res){
    ListRepository.add(req.body, function(err, list){
        return res.json(err || list);
    });
    
});


'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
require('../schemas/List');
var List = mongoose.model('List');
var ItemRepository = require('./ItemRepository');

module.exports.add = function(listData, callback){
    var name = listData.name;
    var list = new List();
    if(name && name.trim().length > 0){
        list.name = name;
        return ItemRepository.add(listData.items, function(err, items){
            list.items = items;
            list.save(function(err){
                return callback(err, list);
            });
        });
    }
    return callback({message:"Missing parameters", obj: listData});
};

module.exports.getAll = function(callback){
    List.find({})
        .populate('items')
        .exec(function(err, lists){
        return callback(err, lists);
    });
};
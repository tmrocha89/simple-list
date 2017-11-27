'use strict';

var _ = require('lodash');
var async = require('async');
var mongoose = require('mongoose');
require('../schemas/Item');
var Item = mongoose.model('Item');
var PriceRepository = require('./PriceRepository');

module.exports.add = function(itemsData, callback){
    var data = _.concat(itemsData, []);
    var items = [];
    async.each(data, function(itemData, cb){
        var item = new Item();
        item.name = itemData.name;
        item.providers = itemData.providers || [];
        PriceRepository.getInformationFromProvider(item.providers, function(err, prices){
            item.prices = prices || [];
            item.save(function(err){
                items.push(item);
                return cb(err);
            });
        });
    }, function(err){
        return callback(err, items);
    });
};
'use strict';

var _ = require('lodash');
var async = require('async');
var mongoose = require('mongoose');
require('../schemas/Price');
var Price = mongoose.model('Price');

//Fix me
var WortenInfoParser = require('../informationParser/WortenInfoParser');

var _add = function(pricesData, callback){
    var data = _.concat(pricesData, []);
    var items = [];
    async.each(data, function(priceData, cb){
        var price = new Price();
        price.productName = priceData.productName;
        price.url = priceData.url;
        price.value = priceData.value;
        price.storeName = priceData.storeName;
        price.date = new Date();
        price.save(function(err){
            items.push(price);
            return cb(err);
        });
    }, function(err){
        return callback(err, items);
    });
};

module.exports.add = function add(pricesData, callback){
    _add(pricesData, callback);
};

var getProviderInformation = function(url, callback){
    if(url.indexOf("worten") > -1){ //really!!!?? -.-
        return WortenInfoParser.parse(url, callback);
    }
    return callback();
}

module.exports.getInformationFromProvider = function(providers, callback){
    var prices = [];
    async.each(providers, function(providerUrl, cb){
        getProviderInformation.call(this, providerUrl, function(err, priceData){
            if(priceData){
                return _add(priceData, function(err, price){
                    prices = _.concat(prices, price);
                    cb();
                });
            }
            cb();
        });
    }, function(err){
        return callback(err, prices);
    });
    
};
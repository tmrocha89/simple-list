'use strict';

var request = require('request');
var cheerio = require('cheerio');


module.exports.parse = function(url, callback){
    request.get(url, function(err, response, html){
        if(!err){
            var $ = cheerio.load(html);
            var productName = $('span.w-product__name').text();
            var strPrice = $('span.w-product__price__current').text();
            var priceValue = $('span.w-product__price__current').attr("content");
            var priceDto ={};
            priceDto.productName = productName;
            priceDto.url = url;
            priceDto.value = parseFloat(priceValue.replace(",","."));
            priceDto.storeName = "Worten";
            return callback(null, priceDto);
        }
        return callback({message:"Can't get information from the specified url", url: url});
    });
};
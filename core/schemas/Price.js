'use strict';
var mongoose = require('mongoose');

var priceSchema = mongoose.Schema({
    productName: String,
    url: String,
    value: Number,
    storeName: String,
    date: Date
});

mongoose.model('Price', priceSchema);
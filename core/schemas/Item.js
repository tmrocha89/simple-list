'use strict';
var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    name: String,
    providers: [String]
});

mongoose.model('Item', itemSchema);
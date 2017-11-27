'use strict';
var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    name: String,
    providers: [String],
    prices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Price'
    }]
});

mongoose.model('Item', itemSchema);
'use strict';
var mongoose = require('mongoose');

var listSchema = mongoose.Schema({
    name: String,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

mongoose.model('List', listSchema);
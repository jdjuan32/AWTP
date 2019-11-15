'use strict';
var mongoose = require('mongoose');
var DatabaseSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter the name of the database'
  },
  port: {
    type: Number,
    required: 'Please enter the database port number'
  },
  vendor: {
    type: String
  },
  version: {
    type: String
  }
});

module.exports = mongoose.model('Databases', DatabaseSchema);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClientSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the client'
  },
  address: {
    type: String,
    required: 'Please enter the client address'
  }
});

module.exports = mongoose.model('Clients', ClientSchema);
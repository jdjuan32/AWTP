'use strict';
var mongoose = require('mongoose');
var ServerSchema = new mongoose.Schema({
  hostname: {
    type: String,
    required: 'Please enter the hostname of the server'
  },
  ip_address: {
    type: String,
    required: 'Please enter the server IP address'
  },
  is_virtual: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Servers', ServerSchema);
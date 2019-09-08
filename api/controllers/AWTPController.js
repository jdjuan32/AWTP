'use strict';

var mongoose = require('mongoose'),
  Client = mongoose.model('Clients');

exports.list_all_clients = (req, res) => {
  Client.find({}, (err, client) => {
    if (err) res.send(err);
    res.json(client);
  });
};

exports.create_a_client = (req, res) => {
  var new_client = new Client(req.body);
  new_client.save((err, client) => {
    if (err) res.send(err);
    res.json(client);
  });
};

exports.read_a_client = (req, res) => {
  Client.findById(req.params.clientId, (err, client) => {
    if (err) res.send(err);
    res.json(client);
  });
};

exports.update_a_client = (req, res) => {
  Client.findOneAndUpdate({_id: req.params.clientId}, req.body, {new: true}, (err, client) => {
    if (err) res.send(err);
    res.json(client);
  });
};

exports.delete_a_client = (req, res) => {
  Client.remove({
    _id: req.params.clientId
  }, (err, client) => {
    if (err) res.send(err);
    res.json({ message: 'Client successfully deleted' });
  });
};

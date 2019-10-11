'use strict';

var mongoose = require('mongoose'),
  Server = mongoose.model('Servers');

exports.list_all_servers = (req, res) => {
  Server.find({}, (err, server) => {
    if (err) res.send(err);
    res.json(server);
  });
};

exports.create_a_server = (req, res) => {
  var new_server = new Server(req.body);
  new_server.save((err, server) => {
    if (err) res.send(err);
    res.json(server);
  });
};

exports.read_a_server = (req, res) => {
  Server.findById(req.params.serverId, (err, server) => {
    if (err) res.send(err);
    res.json(server);
  });
};

exports.update_a_server = (req, res) => {
  Server.findOneAndUpdate({_id: req.params.serverId}, req.body, {new: true}, (err, server) => {
    if (err) res.send(err);
    res.json(server);
  });
};

exports.delete_a_server = (req, res) => {
  Server.remove({_id: req.params.serverId}, (err, server) => {
    if (err) res.send(err);
    res.json({ message: 'Server successfully deleted' });
  });
};

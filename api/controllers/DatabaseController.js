'use strict';

var mongoose = require('mongoose'),
  Database = mongoose.model('Databases');

exports.list_all_databases = (req, res) => {
  Database.find({}, (err, database) => {
    if (err) res.send(err);
    res.json(database);
  });
};

exports.create_a_database = (req, res) => {
  var new_database = new Database(req.body);
  new_database.save((err, database) => {
    if (err) res.send(err);
    res.json(database);
  });
};

exports.read_a_database = (req, res) => {
  Database.findById(req.params.databaseId, (err, database) => {
    if (err) res.send(err);
    res.json(database);
  });
};

exports.update_a_database = (req, res) => {
  Database.findOneAndUpdate({_id: req.params.databaseId}, req.body, {new: true}, (err, database) => {
    if (err) res.send(err);
    res.json(database);
  });
};

exports.delete_a_database = (req, res) => {
  Database.remove({_id: req.params.databaseId}, (err, database) => {
    if (err) res.send(err);
    res.json({ message: 'Database successfully deleted' });
  });
};

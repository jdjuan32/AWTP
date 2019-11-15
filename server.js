var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  mongoose = require('mongoose'),
  Client = require('./api/models/ClientModel'),
  Server = require('./api/models/ServerModel'),
  Database = require('./api/models/DatabaseModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AWTPdb', { useNewUrlParser: true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/AWTPRoutes');
routes(app); 

app.listen(port);

console.log('AWTP RESTful API server started on: ' + port);

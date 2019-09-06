var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

mongoose = require('mongoose'),
  Client = require('./api/models/AWTPModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AWTPdb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/AWTPRoutes');
routes(app); 

app.listen(port);

console.log('AWTP RESTful API server started on: ' + port);

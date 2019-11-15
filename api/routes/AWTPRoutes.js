'use strict';
module.exports = function(app) {
  var ClientList = require('../controllers/ClientController');
  var ServerList = require('../controllers/ServerController');
  var DatabaseList = require('../controllers/DatabaseController');

  app.route('/clients')
    .get(ClientList.list_all_clients)
    .post(ClientList.create_a_client);
  
  app.route('/clients/:clientId')
    .get(ClientList.read_a_client)
    .put(ClientList.update_a_client)
    .delete(ClientList.delete_a_client);

  app.route('/clients/:clientId/servers')
    .get(ServerList.list_all_servers)
    .post(ServerList.create_a_server);

  app.route('/clients/:clientId/servers/:serverId')
    .get(ServerList.read_a_server)
    .put(ServerList.update_a_server)
    .delete(ServerList.delete_a_server);

  app.route('/clients/:clientId/servers/:serverId/databases')
    .get(DatabaseList.list_all_databases)
    .post(DatabaseList.create_a_database);

  app.route('/clients/:clientId/servers/:serverId/databases/:databaseId')
    .get(DatabaseList.read_a_database)
    .put(DatabaseList.update_a_database)
    .delete(DatabaseList.delete_a_database);

  app.get('/clients/:clientId/databases', function(req, res) {
    res.redirect('/clients/:clientId/servers/:serverId/databases');
  });

  app.get('/clients/:clientId/databases/:databaseId', function(req, res) {
    res.redirect('/clients/:clientId/servers/:serverId/databases/:databaseId');
  });
  
};

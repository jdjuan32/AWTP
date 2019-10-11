'use strict';
module.exports = function(app) {
  var ClientList = require('../controllers/ClientController');
  var ServerList = require('../controllers/ServerController');

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
  
};

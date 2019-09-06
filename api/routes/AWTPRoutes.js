'use strict';
module.exports = function(app) {
  var AWTPList = require('../controllers/AWTPController');

  app.route('/clients')
    .get(AWTPList.list_all_clients)
    .post(AWTPList.create_a_client);
  
  app.route('/clients/:clientId')
    .get(AWTPList.read_a_client)
    .put(AWTPList.update_a_client)
    .delete(AWTPList.delete_a_client);
  
};

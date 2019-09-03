'use strict';
module.exports = function(app) {
  var AWTPList = require('../controllers/AWTPController');

  app.route('/tasks')
    .get(AWTPList.list_all_tasks)
    .post(AWTPList.create_a_task);
  
  app.route('/tasks/:taskId')
    .get(AWTPList.read_a_task)
    .put(AWTPList.update_a_task)
    .delete(AWTPList.delete_a_task);
  
};

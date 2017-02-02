var insults = require('./../controllers/insults.js');

module.exports = function(app){

  app.get('/insults/all', function(req, res){
    console.log('insults request in routes');
    insults.getAllInsults(req, res);
  });
};

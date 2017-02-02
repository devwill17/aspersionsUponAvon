app.factory('insultFactory', function($http){
  var factory = {};

  factory.getAllInsults = function(callback){
    console.log("insults request in factory");
    $http.get('/insults/all').then(function(resData){
      console.log("We just got the insults!");
      callback(resData.data);
    });
  }
  
  return factory;
});

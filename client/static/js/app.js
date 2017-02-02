var app = angular.module("myApp", ['ngRoute']);
console.log("we loaded app.js");
app.config(function($routeProvider){
  console.log("we are in app config");
  $routeProvider
    .when('/', {
      templateUrl: 'partials/insult.html',
      controller: 'insultController'
    })
    .otherwise({
      redirect: '/'
    })
});

app.controller('insultController', function($scope, insultFactory){
  console.log("in the insult controller");

  $scope.makeInsult = function(){
    console.log("we clicked a button!");
    insultFactory.getAllInsults(function(data){
      console.log("back in the controller");
      console.log(data);

      function findFirst(){
        min = Math.ceil(0);
        max = Math.floor(49);
        return Math.floor(Math.random() * (max - min)) + min;
        console.log(first);
      }

      function findSecond(){
        min = Math.ceil(0);
        max = Math.floor(49);
        return Math.floor(Math.random() * (max - min)) + min;
        console.log(first);
      }

      function findThird(){
        min = Math.ceil(0);
        max = Math.floor(50);
        return Math.floor(Math.random() * (max - min)) + min;
        console.log(first);
      }


      var first = findFirst();
      var second = findSecond();
      var third = findThird();
      console.log(first);
      console.log(second);
      console.log(third);


      $scope.insult = data.adj[first] + ", " + data.conj[second] + " " + data.noun[third] + "!";
    });
  };
});

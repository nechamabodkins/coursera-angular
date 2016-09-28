var lunchCheck = angular.module('lunchCheck', []);

lunchCheck.controller('LunchCheckController', function($scope){
    var max = 3;
    $scope.menu;
    $scope.message = "";

    $scope.tooMuch = function() {
      if(!$scope.menu){
        $scope.message = "Please enter data.";
      }
      else {
        $scope.items = $scope.menu.split(',');
        if($scope.items.length > max){
          $scope.message = "Too much!";
        }
        else if ($scope.items.length <= max) {
          $scope.message = "Enjoy!";
        }
      }

    };


});

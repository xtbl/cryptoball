'use strict';

angular.module('cryptoballApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'LOL'
    ];
    $scope.message = "Message from main.js!";
    $scope.inputMessage = "";
    $scope.extraMsg = "LOL";
    $scope.newMsg = "";
    /**
     * [ concatenates two strings and assigns into a third parameter ]
     * @return {string} [description]
     */
    $scope.concatString = function() {
    	$scope.newMsg = $scope.inputMessage + $scope.extraMsg;
    };
    
  });

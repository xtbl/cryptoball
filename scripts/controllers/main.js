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

    $scope.encrypted = "";
    $scope.decrypted = "";
    $scope.secretPassphrase = "";

//https://code.google.com/p/crypto-js/

/*
Example

var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
decrypted.toString(CryptoJS.enc.Utf8);

 */

    /**
     * [ concatenates two strings and assigns into a third parameter ]
     * @return {string} [description]
     */
    $scope.concatString = function() {
    	$scope.newMsg = CryptoJS.AES.encrypt($scope.inputMessage, $scope.extraMsg);
    };

    $scope.encryptor = function() {
      $scope.encrypted = CryptoJS.AES.encrypt($scope.inputMessage, $scope.secretPassphrase);
      //var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
      console.log('encrypted: ' + $scope.encrypted );

    };

    $scope.decryptor = function() {
      $scope.decrypted = CryptoJS.AES.encrypt($scope.encryptedMessage, $scope.secretPassphrase);
      //var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
      console.log('decrypted: ' + $scope.decrypted );
    };
    
  });

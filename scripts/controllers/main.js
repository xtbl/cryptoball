'use strict';

angular.module('cryptoballApp')
  .controller('MainCtrl', function ($scope) {

    $scope.inputMessage = "";

    $scope.encrypted = "";
    $scope.encryptedMsg = "";
    $scope.decrypted = "";
    $scope.secretPassphrase = "";

//https://code.google.com/p/crypto-js/

/**
 * encrypts string using pass phrase
 * @return {Object} encrypted object
 */
    $scope.encryptor = function() {
      var encryptedObj = "";
      $scope.encrypted = CryptoJS.AES.encrypt($scope.inputMessage, $scope.secretPassphrase);

      console.log('encrypted: ' + $scope.encrypted );

    };

/**
 * decrypts encrypted object, requires pass phrase
 * @return {String}
 */
    $scope.decryptor = function() {

      var decrypted = CryptoJS.AES.decrypt($scope.encryptedMsg, $scope.secretPassphrase);
      $scope.decrypted = decrypted.toString(CryptoJS.enc.Utf8);

      console.log('decrypted: ' +  decrypted.toString(CryptoJS.enc.Utf8) );

    };
    
  });

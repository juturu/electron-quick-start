'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngCookies']).
  controller('AppCtrl', ['$scope', '$http','$cookies', function ($scope, $http, $cookies) {
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.cookiePut = function () {
      let expireDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
      const ipcRenderer = require('electron').ipcRenderer;
      $cookies.put('stlocale', 'da-dk', { expires: expireDate.toUTCString() });
      ipcRenderer.send('restart');
    }

  }]).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });

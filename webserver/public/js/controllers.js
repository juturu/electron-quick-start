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
      $cookies.put('test', 'hello', { expires: expireDate.toUTCString() })
      $cookies.put('test1', 'hello1', { expires: expireDate.toUTCString() })
      
      const ipcRenderer = window.ipcRenderer;
      $cookies.put('stlocale', 'da-dk', { expires: expireDate.toUTCString() });
      ipcRenderer.send('restart');
    }

    setTimeout(() => {
      
    mainWindow.focus();
    console.log(mainWindow.isFocused())
  }, 3000);

  }]).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });

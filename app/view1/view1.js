'use strict';

angular.module('myApp.view1', ['facebookUtils', 'ngRoute'])
// angular.module('myApp.view1', ['ngRoute'])

.constant('facebookConfigSettings', {
    'routingEnabled' : true,
    'channelFile'    : 'channel.html',
    'appID'          : '178504295959533'
  })

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'CalendarCtrl'
  });
}])

.controller('CalendarCtrl', [function() {
  $rootScope.loggedInUser = {};

    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          $rootScope.loggedInUser = response;
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};
      });
    });
}]);

// angular.module('facebookUtilsDemo', ['facebookUtils', 'ngRoute'])
//   .constant('facebookConfigSettings', {
//     'routingEnabled' : true,
//     'channelFile'    : 'channel.html',
//     'appID'          : '178504295959533'
//   })
//   .controller('RootCtrl', function($rootScope, $scope, facebookUser) {
//     $rootScope.loggedInUser = {};

//     $rootScope.$on('fbLoginSuccess', function(name, response) {
//       facebookUser.then(function(user) {
//         user.api('/me').then(function(response) {
//           $rootScope.loggedInUser = response;
//         });
//       });
//     });

//     $rootScope.$on('fbLogoutSuccess', function() {
//       $scope.$apply(function() {
//         $rootScope.loggedInUser = {};
//       });
//     });
//   });
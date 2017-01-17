'use strict';

angular.module('myApp.facebookLogin', ['facebookUtils', 'ngRoute'])

.constant('facebookConfigSettings', {
    'routingEnabled' : true,
    'channelFile'    : 'channel.html',
    'appID'          : '178504295959533'
  })

// TODO: Redirect to calendar after login
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'facebook_login/facebookLogin.html',
    controller: 'FacebookLoginCtrl'
  });
}])

.controller('FacebookLoginCtrl', function($rootScope, $scope, facebookUser) {
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
});

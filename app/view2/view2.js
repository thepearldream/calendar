'use strict';

angular.module('myApp.view2', ['mwl.calendar', 'ui.bootstrap','ngRoute'])
// angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    needAuth: true
  });
}])

.controller('View2Ctrl', [function() {

}]);
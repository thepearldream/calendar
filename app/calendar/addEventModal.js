'use strict';

var app = angular.module('myApp.calendar');

app.controller('AddEventController', [
  '$scope', '$element', 'title', 'close', 'moment',
  function($scope, $element, title, close, moment) {

  $scope.name = null;
  $scope.where = null;
  $scope.start_at_day = moment().toDate();
  $scope.start_at_time = moment().toDate();
  $scope.end_at_day = moment().toDate();
  $scope.end_at_time = moment().add(1, 'hours').toDate()
  $scope.title = title;
  
  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
  $scope.close = function() {
      close({
      name: $scope.name,
      where: $scope.where,
      start_at_day: $scope.start_at_day,
      start_at_time: $scope.start_at_time,
      end_at_day: $scope.end_at_day,
      end_at_time: $scope.end_at_time,
    }, 500); // close, but give 500ms for bootstrap to animate
  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {

    //  Manually hide the modal.
    $element.modal('hide');
    
    //  Now call close, returning control to the caller.
    close({
      name: $scope.name,
      where: $scope.where,
      start_at_day: $scope.start_at_day,
      start_at_time: $scope.start_at_time,
      end_at_day: $scope.end_at_day,
      end_at_time: $scope.end_at_time,
    }, 500); // close, but give 500ms for bootstrap to animate
  };

}]);
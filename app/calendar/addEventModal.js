'use strict';

var app = angular.module('myApp.calendar');

app.controller('AddEventController', [
  '$scope', '$element', 'title', 'close', 'moment', 'upload',
  function($scope, $element, title, close, moment, upload) {
    // $scope.doUpload = function () {
    //   upload({
    //     url: '/upload',
    //     method: 'POST',
    //     data: {
    //       // anint: 123,
    //       // aBlob: Blob([1,2,3]), // Only works in newer browsers
    //       aFile: $scope.file, // a jqLite type="file" element, upload() will extract all the files from the input and put them into the FormData object before sending.
    //     }
    //   }).then(
    //     function (response) {
    //       console.log(response.data); // will output whatever you choose to return from the server on a successful upload
    //     },
    //     function (response) {
    //       console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
    //     }
    //   );
    // };

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
        file: $scope.file
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
      file: $scope.file
    }, 500); // close, but give 500ms for bootstrap to animate
  };

}]);
'use strict';
var bykeBooking = angular.module('bykeBookingApp', []);

bykeBooking.controller("raceListController",['$scope','$http',function($scope, $http) {
    $scope.races = [];
    $http.get('/races')
        .success(function(data) {
            $scope.refDate = new Date();
            $scope.races = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}]);

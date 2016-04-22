'use strict';
angular.module('bykeBookingApp')
.config(function($routeProvider){
  $routeProvider
  .when('/races',{
    templateUrl:'/templates/races/index.html',
    controller:'RaceListController',
    controllerAs:'raceListController'
  })
  .when('/race/:id', {
    templateUrl: '/templates/race/index.html',
    controller: 'RaceController',
    controllerAs: 'raceController'
  })
  .otherwise({
    templateUrl:'/templates/races/index.html',
    controller:'RaceListController',
    controllerAs:'raceListController'
  });
});

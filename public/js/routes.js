'use strict';
angular.module('bykeBookingApp')
.config(function($routeProvider){
  $routeProvider
  .when('/events',{
    templateUrl:'/templates/races/index.html',
    controller:'RaceListController',
    controllerAs:'raceListController'
  })
  .when('/race/new',{
    templateUrl:'/templates/race/new.html',
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

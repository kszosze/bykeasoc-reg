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
  .when('/clubs',{
    templateUrl:'/templates/clubs/index.html',
    controller:'ClubListController',
    controllerAs:'clubListController'
  })
  .when('/club/new',{
    templateUrl:'/templates/club/new.html',
    controller:'ClubController',
    controllerAs:'clubController'
  })
  .when('/club/:id', {
    templateUrl: '/templates/club/index.html',
    controller: 'ClubController',
    controllerAs: 'clubController'
  })
  .when('/users',{
    templateUrl:'/templates/users/index.html',
    controller:'UserListController',
    controllerAs:'userListController'
  })
  .when('/user/new',{
    templateUrl:'/templates/user/new.html',
    controller:'UserController',
    controllerAs:'userController'
  })
  .when('/user/:id', {
    templateUrl: '/templates/user/index.html',
    controller: 'UserController',
    controllerAs: 'userController'
  })
  .otherwise({
    templateUrl:'/templates/races/index.html',
    controller:'RaceListController',
    controllerAs:'raceListController'
  });
});

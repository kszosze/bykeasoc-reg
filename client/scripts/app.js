'use strict';

angular
  .module('bykeasoc', ['ui.router','ui.bootstrap','lbServices'])
  .constant('Configuration',{
    appName: 'Byke Asoc'
  })
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('/home','/main/home');
    $urlRouterProvider.otherwise('/main');
    $stateProvider
    .state('plain', {
      abstract: true,
      url: '',
      templateUrl: 'views/layouts/plain.html'
    })
    .state('boxed', {
      abstract: true,
      url: '',
      parent: 'plain',
      templateUrl: 'views/layouts/boxed.html'
    })
    .state('main', {
      url: '/main',
      parent: 'plain',
      templateUrl: 'views/layouts/main.html',
      controller: 'MainCtrl'
    })
    .state('clubs', {
      url: '/club',
      parent: 'main',
      templateUrl: 'views/pages/clubs.html',
      controller: 'ClubCtrl'
    })
    .state('races', {
      url: '/race',
      parent: 'main',
      templateUrl: 'views/pages/races.html',
      controller: 'RaceCtrl'
    })
    .state('racers', {
      url: '/racers',
      parent: 'main',
      templateUrl: 'views/pages/racers.html',
      controller: 'PlayerCtrl'
    })
  })
  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/');
  })
  .controller('LoginCtrl', function($scope, User, $location) {
    $scope.login = function() {
      $scope.loginResult = User.login($scope.credentials,
        function () {
          var next = $location.nextAfterLogin || '/';
          $location.nextAfterLogin = null;
          $location.path(next);
        }, function (res) {
          // error
        });
    }
  });

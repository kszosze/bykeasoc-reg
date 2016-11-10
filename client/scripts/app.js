'use strict';

angular
    .module('bykeasoc', ['ui.router', 'ui.bootstrap', 'lbServices'])
    .constant('Configuration', {
        appName: 'Byke Asoc'
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/home', '/main/home');
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
                controller: 'RacerCtrl'
            })
    })
    .config(function(LoopBackResourceProvider) {

        // Use a custom auth header instead of the default 'Authorization'
        LoopBackResourceProvider.setAuthHeader('X-Access-Token');

        // Change the URL where to access the LoopBack REST API server
        LoopBackResourceProvider.setUrlBase('http://localhost:3000/api/');
    })
    .controller('LoginCtrl', function($scope, User, $location) {
        $scope.login = function() {
            $scope.loginResult = User.login($scope.credentials)
            .$promise
            .then(function(response) { 
              $scope.currentUser = { 
                id: response.user.id, 
                tokenId: response.id, 
                email: response.user.email }; 
              });
        }
        $scope.logout = function() {
            $scope.loginResult = User.logout()
              .$promise
              .then(function() {
                $scope.currentUser = null;
              });
        }
    });
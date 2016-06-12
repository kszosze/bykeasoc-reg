'use strict';
angular.module('bykeBookingApp', ['ngRoute','datatables'])
  .controller("RaceListController",['$scope','$http',function($scope, $http) {
    $scope.races = [];
    $http.get('/races')
        .success(function(data) {
            $scope.refDate = new Date();
            $scope.races = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  }])
  .controller("RaceController",['$scope','$http','$routeParams',function($scope, $http, $routeParams){
      $scope.race = {};
      $scope.organizer = {};
      $scope.club = {};
      $http.get('/races/'+$routeParams.id).success(function(data){
        $scope.race = data;
        $http.get('/users/'+data.organiser_id).success(function(data){
          $scope.organiser = data.name+" "+data.surname;
        })
      });
  }])
  .directive("participantsTable",function($http){
    return {
      restrict: 'E',
      templateUrl: '/templates/race/participants.html',
      scope :{
        raceid : '@',
        category : '@'
      }
    /*  ,link : function(scope, element, attrs){
        var category = attrs.category;
        var raceId = attrs.raceid;
        console.log(attrs);
        console.log(raceId);
        console.log(category);
        $http.get('/races/'+raceId+'/participants/category/'+category).success(function(data){
          return data;
        })
      }*/
    };
  })
  .controller("ParticipantsTableController",  function ($scope, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var raceId = $scope.raceid;
    var category = $scope.category;
    vm.dtInstance = {};
    vm.dtOptions = DTOptionsBuilder.fromSource('/races/'+raceId+'/participants/category/'+category)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('name').withTitle('First name'),
        DTColumnBuilder.newColumn('surname').withTitle('Last name'),
        DTColumnBuilder.newColumn('category').withTitle('Category'),
        DTColumnBuilder.newColumn('subscribedOn').withTitle('Subscribe On'),
        DTColumnBuilder.newColumn('club').withTitle('Club'),
        DTColumnBuilder.newColumn('paid').withTitle('Has paid?')
    ];
  });

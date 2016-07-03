'use strict';
angular.module('bykeBookingApp', ['ngRoute','datatables','ui.bootstrap'])
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
  })
  .controller("RaceReviewController", function($scope,$http){

  $scope.today = function() {
      $scope.dt = new Date();
    };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    minDate: new Date(),
    startingDay: 1
  };

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open3 = function() {
    $scope.popup3.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  $scope.popup3 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  var _selected;

  $scope.selected = undefined;
  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  $scope.getClubs = function(val) {
    if (val == null) val=''
     return $http.get('/clubs/search/'+val).then(function(response){
       return response.data;
     });
   };

   $scope.ngModelOptionsSelected = function(value) {
     if (arguments.length) {
       _selected = value.id;
     } else {
       return _selected;
     }
   };

   $scope.modelOptions = {
     debounce: {
       default: 500,
       blur: 250
     },
     getterSetter: true
   };

  this.race= {};
  this.addReview=function(race) {
    $http.post('/races/',race,function(error,newRace){
      if (error){
        console.log(error)
      }else{
          console.log(newRace)
      }
    });
  };
});

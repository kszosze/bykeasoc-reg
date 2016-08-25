'use strict';
angular.module('bykeasoc')
.controller('RaceCtrl', function($scope, Race, $uibModal) {
  function refresh() {
    $scope.races = Race.find({});
  }

  $scope.deleteRace = function(race) {
    var modalInstance = $uibModal.open({
      templateUrl: 'confirmDeleteRace.html',
      controller: 'ModalDeleteRaceCtrl',
      size: 'sm',
      resolve: {
        item: function() {
          return race;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      Race.deleteById({ id: selectedItem.id})
      .$promise
      .then(function() {
        refresh();
      });
    }, function() {
      console.log('dismissed?');
    });
  };
  $scope.createRace = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'editRace.html',
      controller: 'ModalEditRaceCtrl',
      size: 'lg',
      resolve: {
        item: function() {
          return null;
        }
      }
    });
    modalInstance.result.then(function(selectedItem) {
      Race.create(selectedItem)
      .$promise
      .then(function() {
        refresh();
      });
    }, function() {
      console.log('dimissed');
    });
  };
  $scope.editRace = function(race) {
    var modalInstance = $uibModal.open({
      templateUrl: 'editRace.html',
      controller: 'ModalEditRaceCtrl',
      size: 'lg',
      resolve: {
        item: function() {
          return race;
        }
      }
    });
    modalInstance.result.then(function(selectedItem) {
      selectedItem.$save(selectedItem);
    }, function() {
      console.log('dimissed?');
    });
  };
  refresh();
})
.controller('ModalDeleteRaceCtrl', function($scope, $uibModalInstance, item) {
  $scope.item = item;
  $scope.title = 'Confirm deletion';
  $scope.text = 'Do you really want to delete race ' + $scope.item.name;

  $scope.ok = function() {
    $uibModalInstance.close(item);
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  }
})
.controller('ModalEditRaceCtrl', function($scope, $uibModalInstance, Club, item) {
  $scope.isNew = (item === null);
  if ($scope.isNew) {
    $scope.item = {
      name: '',
      date: new Date(),
      start_registration: new Date(),
      end_registration: new Date(),
      location: '',
      open: false
    }
  } else {
    $scope.item = item;
  }

  $scope.ok = function() {
    $uibModalInstance.close($scope.item);
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };
  $scope.popup1 = {
    opened: false
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };
  $scope.popup2 = {
    opened: false
  };

  $scope.open3 = function() {
    $scope.popup3.opened = true;
  };
  $scope.popup3 = {
    opened: false
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

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
  $scope.selected = undefined;
  function getDayClass(data) {
    var date = data.date, mode = data.mode;
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
  }

  $scope.getClubs = function(val) {
    return Club.find({where : {name: {like: '%'+val+'%'}}});
  };

  $scope.ngModelOptionsSelected = function(value) {
    var _selected;
    if (arguments.length) {
      _selected = value.id;
    }
    return _selected;
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };
});

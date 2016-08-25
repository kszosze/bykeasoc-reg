'use strict';

angular.module('bykeasoc')
.controller('RacerCtrl', function($scope, People, $uibModal) {
  function refresh() {
    $scope.racers = People.find({});
  }

  $scope.deleteRacer = function(racer) {
    var modalInstance = $uibModal.open({
      templateUrl: 'confirmDeleteRacer.html',
      controller: 'ModalDeleteRacerCtrl',
      size: 'sm',
      resolve: {
        item: function() {
          return racer;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      People.findById({ id:selectedItem.id })
        .$promise
        .then(function() {
          refresh();
        });
    }, function() {
      console.log('dimissed?');
    });
  };
  $scope.createRacer = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'editRacer.html',
      controller: 'ModalEditRacerCtrl',
      size: 'lg',
      resolve: {
        item: function() {
          return null;
        }
      }
    });
    modalInstance.result.then(function(selectedItem) {
      People.create(selectedItem)
        .$promise
        .then(function() {
          refresh();
        });
    }, function() {
      console.log('dismissed?')
    });
  };
  $scope.editRacer = function(racer) {
    var modalInstance = $uibModal.open ({
      templateUrl: 'editRacer.html',
      controller: 'ModalEditRacerCtrl',
      size: 'lg',
      resolve: {
        item: function() {
          return racer;
        }
      }
    });
    modalInstance.result.then(function(selectedItem) {
      selectedItem.$save();
    }, function() {
      console.log('dismissed?')
    });
  };
  refresh();
})
.controller('ModalDeleteRacerCtrl', function($scope, $uibModalInstance, item) {
  $scope.item = item;
  $scope.title = 'Confirm deletion';
  $scope.text = 'Do you really want to delete racer ' + $scope.item.name;

  $scope.ok = function() {
    $uibModalInstance.close(item);
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
})
.controller('ModalEditRacerCtrl', function($scope, $uibModalInstance, item, Club) {
  $scope.isNew = (item === null);
  if ($scope.isNew) {
    $scope.item = {
      name: '',
      surname: '',
      day_of_birth: new Date(),
      active: true
    }
  }

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };
  $scope.popup1 = {
    opened: false
  };

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

  $scope.ok = function() {
    $uibModalInstance.close($scope.item);
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

});

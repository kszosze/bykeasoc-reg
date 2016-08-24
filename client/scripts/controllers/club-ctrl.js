'use strict';
angular.module('bykeasoc')
.controller('ClubCtrl', function($scope, Club, $uibModal) {
  function refresh() {
    $scope.clubs = Club.find({});
  }

  $scope.deleteClub = function(club) {
    var modalInstance = $uibModal.open({
      templateUrl: 'confirmDeleteClub.html',
      controller: 'ModalDeleteClubCtrl',
      size: 'sm',
      resolve: {
        item: function() {
          return club;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      Club.deleteById({ id: selectedItem.id })
      .$promise
      .then(function() {
        refresh();
      });
    }, function() {
      console.log('dismissed?')
    });
  };
  $scope.createClub = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'editClub.html',
      controller: 'ModalEditClubCtrl',
      size: 'lg',
      resolve: {
        item: function() {
          return null;
        }
      }
    });
    modalInstance.result.then(function(selectedItem) {
      Club.create(selectedItem)
      .$promise
      .then(function() {
        refresh();
      });
    }, function() {
      console.log('dismissed?')
    });
  };
  $scope.editClub = function(club) {
      var modalInstance = $uibModal.open({
        templateUrl: 'editClub.html',
        controller: 'ModalEditClubCtrl',
        size: 'lg',
        resolve: {
          item: function() {
            return club;
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
.controller('ModalDeleteClubCtrl', function($scope, $uibModalInstance, item) {
  $scope.item = item;
  $scope.title = 'Confirm deletion';
  $scope.text = 'Do you really want to delete club ' + $scope.item.name;

  $scope.ok = function() {
    $uibModalInstance.close(item);
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  }
})
.controller('ModalEditClubCtrl', function($scope, $uibModalInstance, item, People) {
  $scope.isNew = (item === null);
  if ($scope.isNew) {
    $scope.item = {
      name: '',
      web_page: '',
      location: '',
      active: true
    }
  } else {
    $scope.item = item;
  }

  $scope.getUsers = function(val) {
    return People.find({where : {name: {like: '%'+val+'%'}}});
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
  }
});

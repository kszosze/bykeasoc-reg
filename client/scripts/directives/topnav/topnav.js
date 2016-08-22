'use strict';

angular.module('bykeasoc')
	.directive('topnav',function(){
		return {
        templateUrl:'scripts/directives/topnav/topnav.html',
        restrict: 'E',
        replace: true,
    	}
	});

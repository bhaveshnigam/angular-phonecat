'use strict';

/* Controllers */

function PhoneListController ($scope, $http) {
	$http.get('phones/phones.json').success(function(data) {
		$scope.phones = data;
	});


	$scope.orderProp = 'age'
}

function PhoneDetailCtrl($scope, $routeParams, $http) {
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
    $scope.mainImageUrl = data.images[0];
  });
 
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}


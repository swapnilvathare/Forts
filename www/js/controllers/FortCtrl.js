app.controller('FortCtrl', ['$scope', 
    '$state',
    '$stateParams', 
    'ionicMaterialMotion',
    'regService', 
    function ($scope, $state, $stateParams, ionicMaterialMotion, regService) {
            $scope.selectedFort = regService.getSubscription();
            console.info($scope.selectedFort);
            $scope.selectMap = function(){
	        	//console.info(name);
	            //regService.setSubscription(name);
	            $state.go('app.map');
        	}
  // Do something with myService
}]);
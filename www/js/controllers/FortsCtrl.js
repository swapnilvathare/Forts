app.controller('FortsCtrl', ['$scope', 
 	'$state',
    '$stateParams', 
    'ionicMaterialMotion',
    'regService', 
    function ($scope, $state, $stateParams, ionicMaterialMotion, regService) {
        $scope.selectFort = function(name){
        	console.info(name);
            regService.setSubscription(name);
            $state.go('app.fort');
        }
  // Do something with myService
}]);
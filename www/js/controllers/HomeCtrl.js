app.controller('HomeCtrl', ['$scope', 
    '$rootScope', 
 	'$state',
    '$timeout',
    '$stateParams', 
    'ionicMaterialMotion',
    'regService', 
    function ($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialMotion, regService) {
        $scope.recommendedFort = function(name){
        	console.info(name);
            regService.setSubscription(name);
            $state.go('app.fort');
        }
        $scope.selectedType = function(type){
            $rootScope.sType = type;
            //console.info(name);
            //regService.setSubscription(name);
            //$timeout(function() {
            //console.info($rootScope.sType);
                $state.go('app.forts');
            //}, 2000);
            //$state.go('app.forts');
        }
  // Do something with myService
}]);
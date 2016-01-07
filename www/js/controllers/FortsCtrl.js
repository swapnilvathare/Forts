app.controller('FortsCtrl', ['$scope', 
 	'$state',
    '$rootScope',
    '$timeout',
    '$stateParams', 
    'ionicMaterialMotion',
    'regService', 
    function ($scope, $state, $rootScope, $timeout, $stateParams, ionicMaterialMotion, regService) {
        console.info($rootScope.sType);
        $scope.selectFort = function(name){
            regService.setSubscription(name);
            $state.go('app.fort');
        }
        //$('li:nth-child(2)').trigger('ng-click');
        /*$timeout(function() {
            console.info($rootScope.sType);
            onTabTabbed($event, 2)
        }, 2000);*/
  // Do something with myService
}]);
app.controller('MapCtrl', ['$scope', 
    '$state',
    '$stateParams', 
    'ionicMaterialMotion',
    'regService',
    'uiGmapGoogleMapApi',
    '$timeout', 
    function ($scope, $state, $stateParams, ionicMaterialMotion, regService, uiGmapGoogleMapApi, $timeout) {
            $scope.selectedFort = regService.getSubscription();
            var latLong = $scope.selectedFort.Coordinates;
            var latLong = latLong.split(", ")
            console.info(latLong);
            /*$scope.map = { center: { latitude: latLong[0], longitude: latLong[1] }, zoom: 8 };*/
  // Do something with myService 20°42′22″N 76°59′24″E   20.706225,76.990019

      $scope.map = {center: {latitude: latLong[0], longitude: latLong[1] }, zoom: 8 };
    $scope.map = {center: {latitude: latLong[0], longitude: latLong[1] }, zoom: 8 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: latLong[0],
        longitude: latLong[1]
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    /*$timeout(function () {
      $scope.marker.coords = {
        latitude: 42.1451,
        longitude: -100.6680
      };
      $scope.dynamicMoveCtr++;
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 43.1451,
          longitude: -102.6680
        };
        $scope.dynamicMoveCtr++;
      }, 2000);
    }, 1000);*/
 
}]);
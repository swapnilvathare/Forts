var fortService = angular.module('fortService', [])
fortService.factory('fortDataOp', ['$http', function ($http) {

    var urlBase = 'data/forts.json';
    var fortDataOp = {};

    fortDataOp.getforts = function () {
        return $http.get(urlBase);
    };

    fortDataOp.addfort = function (stud) {
        return $http.post(urlBase, stud);
    };
    return fortDataOp;

}]);
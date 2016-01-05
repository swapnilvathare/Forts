app.controller('AppCtrl', function ($rootScope, $scope, $state, $location, $window, $ionicModal, $ionicPopover, $timeout, $http, fortDataOp) {

    $scope.status;
    $scope.forts;
    getforts();

    function getforts() {
        fortDataOp.getforts()
            .success(function (studs) {
                $scope.forts = studs.forts;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

     fab.style.display = 'none';
    /*$scope.addfort = function () {

        var stud = {
            ID: 145,
            Name: $scope.fname,
            LastName: $scope.lname
        };
        fortDataOp.addfort(stud)
            .success(function () {
                $scope.status = 'Inserted fort! Refreshing Student list.';
                $scope.forts.push(stud);
            }).
            error(function (error) {
                $scope.status = 'Unable to insert fort: ' + error.message;
            });
    };*/
    // Form data for the login modals
    $scope.loginData = {};

    /*$http.get('data/forts.json').
    success(function(data, status, headers, config) {
        console.info(data);
      $scope.forts = data.forts;
    }).
    error(function(data, status, headers, config) {
      // log error
    });*/

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    /*var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });*/

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});

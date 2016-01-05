/**
 * Created by webonise on 11/9/15.
 */
app.service('regService',['fortDataOp',function(request) {

  var choosenPack = [];
  var subscribedPlan = {};
  var seletedSubscription = []; 
  var isRenew = false;
  var isAddon = false;
  var subscriptionId;
  var currentSubscription = [];

  this.getAllPacks = function() {
    return request.fetch(appConfig.servicePacks,'');
  };

  this.setChoosenPack = function(pack) {
    choosenPack = pack;
  };

  this.getChoosenPack = function() {
    return choosenPack;
  };

  this.setSubscription = function(plan) {
    subscribedPlan = plan;
  };
  this.getSubscription = function() {
    return subscribedPlan;
  };

}]);

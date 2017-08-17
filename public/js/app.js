const app = angular.module('musicApp', []);

app.controller('mainController', ['$http', function($http){
  const controller = this;
  this.music = 'lalala'
}]);

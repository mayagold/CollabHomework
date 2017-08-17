
// Angular

const app = angular.module('musicApp', []);


// Main Controller
app.controller('mainController', ['$http', function($http){
  const controller = this;
  this.music = 'lalala';
  this.formData = {};
  // get route
  this.getAlbum = function() {
    $http({
      method:'GET',
      url: '/music'
    }).then(function(response){
      controller.album = response.data
    }, function(err){
      console.log(err);
    });
  }
  // create route
  this.createAlbum = function() {
    console.log('called createAlbum function');
    $http({
      method: 'POST',
      url: '/music',
      data: controller.formData
    }).then(function(response, data){
      console.log(response.config.data);
      controller.album.push(response.config.data);
      console.log(controller.album);
    }, function(err){
      console.log(err);
    })
    console.log(controller.album);
  };
  this.getAlbum();
}]);

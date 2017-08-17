
// Angular

const app = angular.module('musicApp', []);


// Main Controller
app.controller('mainController', ['$http', function($http){
  const controller = this;
  this.music = 'lalala';

  this.getAlbum = function() {
    $http({
      method:'GET',
      url: '/music'
    }).then(function(response){
      controller.album = response.data
    }),function(err){
    };
  }

  this.getAlbum();





  // this.createAlbum = function(){
  //   $http({
  //     method: 'POST',
  //     url: '/music',
  //     data: {
  //       artist: this.artist,
  //       album: this.album,
  //       year: this.album,
  //       picture: this.picture
  //     }
  //   }).then(function(response){
  //     controller.
  //   })
  // }

}]);

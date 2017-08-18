
// Angular

const app = angular.module('musicApp', []);


// Main Controller
app.controller('mainController', ['$http', function($http){

  const controller = this;
  // this.album = [];
  this.formdata = {};

  // get route
  this.getAlbum = function(){
    $http({
      method:'GET',
      url: '/music'
    }).then(function(response){
      controller.album = response.data
    }, function(err){
      console.log(err);
    });
  };

  // create route
  this.createAlbum = function(){
    $http({
      method: 'POST',
      url: '/music',
      data: controller.formdata
    }).then(function(response){
      controller.album.push(response.config.data);
    }, function(){
      console.log('error');
    })
  };

  // delete route

  this.deleteAlbum = function(album) {
    $http({
      method: 'DELETE',
      url: '/music/' + album._id
    }).then(
      function(response){
        controller.getAlbum();
      }, function(error){
        console.log(error);
      }
    )
  }

  // update route
  //
  this.editAlbum = function(album){
    console.log(album)
    $http({
      method: 'PUT',
      url: '/music/' + album._id,
      data: {
        artist: this.updateArtist,
        album: this.updateAlbum,
        year: this.updateYear,
        picture: this.updatePicture
      }
    }).then(
      function(response){
        controller.getAlbum();
      }, function(error){
        console.log(error);
      }
    );
  }

  this.getAlbum();
}]);

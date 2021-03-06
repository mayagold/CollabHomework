
// Angular

const app = angular.module('musicApp', []);


// Main Controller
app.controller('mainController', ['$http', function($http){

  const controller = this;
  this.album = [];
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
    }, function(err){
      console.log(err);
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
    $http({
      method: 'PUT',
      url: '/music/' + album._id,
      data: {
        artist: controller.updateArtist,
        albumname: controller.updateAlbum,
        year: controller.updateYear,
        picture: controller.updatePicture
      }
    }).then(
      function(response){
        album.artist = controller.updateArtist;
        album.albumname = controller.updateAlbumname;
        album.year = controller.updateYear;
        album.picture = controller.updatePicture;
        console.log(album)
      }, function(error){
        console.log(error);
      }
    );
  }

  this.getAlbum();
}]);

// Angular App

var app = angular.module("carouselApp", []);

// Angular Controller
app.controller("carouselAppCntrl", function($scope) {
  $scope.title = "Carousel Replica";

  // Default images with Name and path

  $scope.direction = 'left';
  $scope.currentIndex = 0;

  $scope.slides =  [
      {
        "name":"Apple",
        "path":"https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg"
      },
      {
        "name":"Orange",
        "path":"http://bangalorefruits.com/wp-content/uploads/2013/07/orange-02.jpg"
      },
      {
        "name":"Mango",
        "path":"http://mangomaniafl.net/wp-content/uploads/2014/06/iStock_000012591574Medium.jpg"
      } ];

  $scope.isCurrentSlideIndex = function (index) {
    return $scope.currentIndex === index;
  };

  $scope.prevSlide = function() {
    $scope.direction = 'left';
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function() {
    $scope.direction = 'right';
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  };

  // Todo: Validate the values
  // Name: Check for null, valid string
  // URL: Regex with URL text

  $scope.insertNewImage = function() {
    if($scope.imageName.trim() !== "" && $scope.imageURL.trim() !== "") {
      var data = {
        "name" : $scope.imageName,
        "path": $scope.imageURL
      }
      $scope.slides.push(data);
      $scope.imageName = "";
      $scope.imageURL = "";
    }
  }
});

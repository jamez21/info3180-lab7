// Your JavaScript Code here


/* global angular */
var app = angular.module("image_Viewer", []);

app.controller("image_Display", function($scope, $http){
    $http.get('/api/thumbnails').then(function(response){
        $scope.images = response.data["thumbnails"];
    });
});

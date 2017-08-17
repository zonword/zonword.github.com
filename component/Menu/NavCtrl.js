(function(){
    "use strict";
    
    angular.module('myWebSite')
    .controller('NavCtrl', MainController)
    
    MainController.$inject = ['$scope','$location'];
    function MainController($scope,$location) {
        $scope.isActive = function(destination){
           return destination === $location.path();
        }
    }
        
})();

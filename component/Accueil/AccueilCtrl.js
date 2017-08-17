(function(){
    "use strict";
    
    angular.module('myWebSite')
    .controller('AccueilCtrl', MainController)
    
    MainController.$inject = ['$scope','Info'];
    function MainController($scope,Info) {
        
    }
        
})();

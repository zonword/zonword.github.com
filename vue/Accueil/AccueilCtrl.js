(function(){
    "use strict";
    
    angular.module('myWebSite')
    .controller('AccueilCtrl', MainController)
    
    MainController.$inject = ['$q','$scope','Info'];
    function MainController($q,$scope,Info) {
        $scope.Info = []

        function GetInfo(){ 
            Info.Get()
                .then(function(data) {
                    console.log(data);
                    $scope.Info = data;
                }, function(err) {
                    console.log(err);
                });
        }

        GetInfo();
    }
        
})();

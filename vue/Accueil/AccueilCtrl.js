(function(){
    "use strict";
    
    angular.module('myWebSite')
    .controller('AccueilCtrl', MainController)
    
    MainController.$inject = ['$scope','Info'];
    function MainController($scope,Info) {
        $scope.Info = []

        function GetInfo(){ 
            Info.Get()
                .then(function(data) {
                    console.log(data.Information)
                    $scope.Info = data.Information;
                }, function(err) {
                    console.log(err);
                });
        }

        GetInfo();
    }
        
})();

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
                    console.log(data)
                    $scope.Info = data;
                }, function(err) {
                    console.log(err);
                });
        }

        GetInfo();
    }
        
})();

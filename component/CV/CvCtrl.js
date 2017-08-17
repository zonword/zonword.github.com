(function(){
    "use strict";
    
    angular.module('myWebSite')
    .controller('CvCtrl', MainController)
    
    MainController.$inject = ['$scope','Info'];
    function MainController($scope,Info) {
        $scope.Info = []

        function GetInfo(){ 
            Info.Get()
                .then(function(data) {
                    console.log(data.data.Information)
                    $scope.Info = data.data.Information;
                }, function(err) {
                    console.log(err);
                });
        }

        GetInfo();
    }
        
})();

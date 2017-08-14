(function() {
    "use strict";
    angular.module('WebSite', [])
        .factory("Info", Info)
        
        Info.$inject = ['$q','$http','CONSTANT'];
        function Info($q,$http,CONSTANT) {
           var url      = CONSTANT.JSON;
                                 
           var Get = () => {
              var q = $q.defer();
              $http({method: 'GET', url: url})
                 .then(res => {
                    q.resolve(res)
                 }, err => {
                    q.reject(err)
                 });
              return q.promise;
           }
           
           return {
              Get: Get
           }
        }
        
})();

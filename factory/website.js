(function() {
    "use strict";
    angular.module('WebSite', [])
        .factory("Info", Info)
        
        Info.$inject = ['$q','$http','CONSTANT'];
        function Info($q,$http,CONSTANT) {
           var url      = CONSTANT.JSON;
           var config   = {
                headers: {
                    "Accept": "application/json;charset=utf-8",
                    "Accept-Charset":"charset=utf-8"
                }
            };
                                 
           var Get = () => {
              var q = $q.defer();
              $http({method: 'GET', url: url, config: config})
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

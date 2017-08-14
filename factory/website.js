(function() {
    "use strict";
    angular.module('WebSite', [])
        .factory("Info", Info)
        
        Info.$inject = ['$q','CONSTANT'];
        function Info($q,CONSTANT) {
           var url      = CONSTANT.JSON;
                                 
           var Get = () => {
              var q = $q.defer();
              q.resolve(url)
              return q.promise;
           }
           
           return {
              Get: Get
           }
        }
        
})();

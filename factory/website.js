(function() {
    "use strict";
    angular.module('WebSite', [])
        .factory("Info", Info)
        
        Info.$inject = ['CONSTANT'];
        function Info(CONSTANT) {
           var url      = CONSTANT.JSON;
                                 
           var Get = () => {
              var q = $q.defer();
              q.resolve(url.Information)
              return q.promise;
           }
           
           return {
              Get: Get
           }
        }
        
})();

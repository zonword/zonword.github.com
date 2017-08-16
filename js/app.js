(function() {
    "use strict";
    
    angular.module('myWebSite', ['ngRoute','WebSite'])
    .constant('CONSTANT', { JSON: "https://zonword.github.io/data.json" })
    .config(config)
    
    config.$inject = ['$routeProvider', '$httpProvider']
    function config($routeProvider,$httpProvider) {
        $routeProvider.
            when('/Accueil', {
                templateUrl: 'vue/Accueil/main.html',
                controller: 'AccueilCtrl'
            }).
            otherwise({
                redirectTo: '/Accueil'
            });
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    
})();

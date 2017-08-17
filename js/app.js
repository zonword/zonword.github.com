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
            when('/CV', {
                templateUrl: 'vue/CV/main.html',
                controller: 'CvCtrl'
            }).
            when('/Article', {
                templateUrl: 'vue/Article/list.html',
                controller: 'ArticleCtrl'
            }).
            otherwise({
                redirectTo: '/Accueil'
            });
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    
})();

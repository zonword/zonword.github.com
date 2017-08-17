(function() {
    "use strict";
    
    angular.module('myWebSite', ['ngRoute','WebSite'])
    .constant('CONSTANT', { JSON: "https://zonword.github.io/data.json" })
    .config(config)
    
    config.$inject = ['$routeProvider', '$httpProvider']
    function config($routeProvider,$httpProvider) {
        $routeProvider.
            when('/Accueil', {
                templateUrl: 'component/Accueil/main.html',
                controller: 'AccueilCtrl'
            }).
            when('/CV', {
                templateUrl: 'component/CV/main.html',
                controller: 'CvCtrl'
            }).
            when('/Article', {
                templateUrl: 'component/Article/list.html',
                controller: 'ArticleCtrl'
            }).
            otherwise({
                redirectTo: '/Accueil'
            });
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    
})();

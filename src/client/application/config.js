angular.module('application').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "src/client/application/partial/index.html"
        })
        .state('404', {
            url: "/*path",
            templateUrl: "src/client/application/partial/404.html"
        });
    
    $urlRouterProvider.otherwise("/");
});

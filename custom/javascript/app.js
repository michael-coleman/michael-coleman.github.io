
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/projects', {
            templateUrl: "views/projects.html"
        })
        .when('/docs/node', {
            templateUrl: "docs-html/docs/global-node-install.html"
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

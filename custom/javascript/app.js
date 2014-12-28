
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
            templateUrl: "markdown/global-node-install.html"
        });

        // Catch all/most bad routes
        $routeProvider.otherwise({
            redirectTo: '/'
        });

}]);

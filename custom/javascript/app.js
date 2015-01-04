
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        });

        // Catch all/most bad routes
        $routeProvider.otherwise({
            redirectTo: '/'
        });
}]);

var app = angular.module('myApp',["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when('/service',{
            templateUrl:"./App/View/service.html",
            controller:"serviceController"
        })
        .when('/finance',{
            templateUrl:"./App/View/finance.html",
            controller:"financeController"
        })
        .otherwise({redirectTo:"/service"})
})
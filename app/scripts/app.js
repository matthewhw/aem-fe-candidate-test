'use strict';

/**
 * @ngdoc overview
 * @name reviewModule
 * @description
 * # reviewModule
 *
 * Main module of the application.
 */
angular
  .module('reviewModule', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
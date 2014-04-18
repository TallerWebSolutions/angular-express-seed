'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').

  /**
   * Beer service.
   */
  service('Beers', ['$scope', '$http',
    function ($scope, $http) {
      return {
        get: function (id) {
          return $http({
            method: 'GET',
            url: 'api/beers' + (id ? '/' + id : '')
          });
        }
      }
    }
  ]);

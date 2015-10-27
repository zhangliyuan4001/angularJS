'use strict';

angular.module('ngShowcaseApp').directive('appHeader', function($rootScope, $window, config) {
  return {
    restrict: 'EA',
    templateUrl: 'views/home/header.html',
    scope: {},
    link: function(scope, element, attrs) {
      var vm = scope.vm = {};
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        vm.title = $window.document.title = toState.label + ' - ' + config.title
      })
    }
  }
});
'use strict';

var app = angular.module('com.module.core');

app.directive('rdWidget', function () {
  return {
    transclude: true,
    template: '<div class="widget" ng-transclude></div>',
    restrict: 'EA'
  };
});

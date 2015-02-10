'use strict';

var app = angular.module('com.module.core');

app.directive('rdWidgetFooter', function () {
  return {
    requires: '^rdWidget',
    transclude: true,
    template: '<div class="widget-footer" ng-transclude></div>',
    restrict: 'E'
  };
});


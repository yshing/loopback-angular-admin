'use strict';
angular.module('com.module.core')
/**
 * @ngdoc function
 * @name com.module.core.controller:LayoutCtrl
 * @description Layout controller
 * @requires $scope
 * @requires $rootScope
 * @requires CoreService
 * @requires gettextCatalog
 **/
  .controller('LayoutCtrl', function ($scope, $rootScope, $cookieStore, $cookies, $window, $state, CoreService, AppAuth, gettextCatalog) {

    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (toState.data !== undefined) {
        $scope.pageTitle = toState.data.pageTitle;
        $scope.pageSubtitle = toState.data.pageSubtitle;
      }
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      var stateName = $state.current.name;
      $scope.stateClassName = stateName.replace(/\./g, '-');
      console.log($scope.stateClassName);
    });


    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function () {
      return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue) {
      if (newValue >= mobileView) {
        if (angular.isDefined($cookieStore.get('toggle'))) {
          $scope.toggle = !$cookieStore.get('toggle') ? false : true;
        } else {
          $scope.toggle = true;
        }
      } else {
        $scope.toggle = false;
      }

    });

    $scope.toggleSidebar = function () {
      $scope.toggle = !$scope.toggle;
      $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
      $scope.$apply();
    };

    // angular translate
    $scope.locale = {
      isopen: false
    };

    $scope.locales = $rootScope.locales;
    $scope.selectLocale = $rootScope.locale;

    $scope.setLocale = function (locale) {
      // set the current lang
      $scope.locale = $scope.locales[locale];
      $scope.selectLocale = $scope.locale;
      $rootScope.locale = $scope.locale;
      $cookies.lang = $scope.locale.lang;

      // You can change the language during runtime
      $scope.locale.isopen = !$scope.locale.isopen;

      gettextCatalog.setCurrentLanguage($scope.locale.lang);
    };

    $scope.apiUrl = CoreService.env.apiUrl;
    $scope.settings = $rootScope.settings;

    $rootScope.loadSettings();

  });

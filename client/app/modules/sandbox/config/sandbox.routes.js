'use strict';
angular.module('com.module.sandbox')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.sandbox', {
        abstract: true,
        url: '/sandbox',
        templateUrl: 'modules/sandbox/views/main.html',
        controller: 'SandboxCtrl',
        data: {
          pageTitle: 'Sandbox',
          pageSubtitle: 'Throw your sand around here!'
        },
        ncyBreadcrumb: {
          parent: 'app.home'
        }
      })
      .state('app.sandbox.index', {
        url: '',
        controller: function ($state) {
          $state.go('app.sandbox.autofields');
        },
        ncyBreadcrumb: {
          label: 'Sandbox'
        }
      })
      .state('app.sandbox.forms', {
        url: '/forms',
        templateUrl: 'modules/sandbox/views/forms.html',
        controller: 'SandboxFormsCtrl',
        ncyBreadcrumb: {
          label: 'Forms',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.icons', {
        url: '/icons',
        templateUrl: 'modules/sandbox/views/icons.html',
        controller: 'SandboxIconsCtrl',
        ncyBreadcrumb: {
          label: 'Icons',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.faker', {
        url: '/faker',
        templateUrl: 'modules/sandbox/views/faker.html',
        controller: 'SandboxFakerCtrl',
        ncyBreadcrumb: {
          label: 'Faker',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.coreservice', {
        url: '/coreservice',
        templateUrl: 'modules/sandbox/views/coreservice.html',
        controller: 'SandboxCoreServiceCtrl',
        ncyBreadcrumb: {
          label: 'CoreService',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.bootstrap', {
        url: '/bootstrap',
        templateUrl: 'modules/sandbox/views/bootstrap.html',
        ncyBreadcrumb: {
          label: 'Bootstrap',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.trees', {
        url: '/trees',
        templateUrl: 'modules/sandbox/views/trees.html',
        controller: 'SandboxTreesCtrl',
        ncyBreadcrumb: {
          label: 'Trees',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.dashboard', {
        url: '',
        templateUrl: 'modules/sandbox/views/dashboard.html',
        controller: 'DashboardCtrl',
        ncyBreadcrumb: {
          label: 'Dashboad',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.grid', {
        url: '/grid',
        templateUrl: 'modules/sandbox/views/grid.html',
        controller: 'SandboxGridCtrl',
        ncyBreadcrumb: {
          label: 'Grid',
          parent: 'app.sandbox.index'
        }
      })
      .state('app.sandbox.autofields', {
        url: '/autofields',
        templateUrl: 'modules/sandbox/views/autofields.html',
        controller: 'AutoFieldsCtrl',
        ncyBreadcrumb: {
          label: 'Autofields',
          parent: 'app.sandbox.index'
        }
      });
  });

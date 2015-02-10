'use strict';
angular.module('com.module.users')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        template: '<register></register>',
        controller: 'RegisterCtrl'
      })
      .state('app.users', {
        abstract: true,
        url: '/users',
        template: '<section ui-view class="content"></section>',
        data: {
          pageTitle: 'Users',
          pageSubtitle: 'Manager your users here!'
        },
        ncyBreadcrumb: {
          parent: 'app.home'
        }
      })
      .state('app.users.profile', {
        url: '/profile',
        templateUrl: 'modules/users/views/profile.html',
        controller: 'ProfileCtrl',
        ncyBreadcrumb: {
          label: 'Manage profile',
          parent: 'app.home'
        }
      })
      .state('app.users.list', {
        url: '',
        templateUrl: 'modules/users/views/list.html',
        controller: 'UsersCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          label: 'Users'
        }
      })
      .state('app.users.add', {
        url: '/add',
        templateUrl: 'modules/users/views/form.html',
        controller: 'UsersCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          label: 'Add user',
          parent: 'app.users.list'
        }
      })
      .state('app.users.edit', {
        url: '/edit/:id',
        templateUrl: 'modules/users/views/form.html',
        controller: 'UsersCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          label: 'Edit user',
          parent: 'app.users.list'
        }
      })
      .state('app.users.view', {
        url: '/view/:id',
        templateUrl: 'modules/users/views/view.html',
        controller: 'UsersCtrl',
        authenticate: false,
        ncyBreadcrumb: {
          label: 'View user',
          parent: 'app.users.list'
        }
      })
      .state('app.users.delete', {
        url: '/delete/:id',
        controller: 'UsersCtrl',
        authenticate: true
      });
  });

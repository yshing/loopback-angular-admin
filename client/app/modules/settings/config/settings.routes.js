'use strict';
angular.module ('com.module.settings')
  .config (function ($stateProvider) {
    $stateProvider.state ('app.settings', {
      abstract: true,
      url: '/settings',
      template: '<section ui-view class="content"></section>',
      data: {
        pageTitle: 'Settings',
        pageSubtitle: 'Manage your settings here!'
      }
    })
      .state ('app.settings.list', {
        url: '',
        templateUrl: 'modules/settings/views/list.html',
        controller: 'SettingsCtrl'
      })
      .state ('app.settings.add', {
        url: '/add',
        templateUrl: 'modules/settings/views/form.html',
        controller: 'SettingsCtrl'
      })
      .state ('app.settings.edit', {
        url: '/:id/edit',
        templateUrl: 'modules/settings/views/form.html',
        controller: 'SettingsCtrl'
      })
      .state ('app.settings.view', {
        url: '/:id',
        templateUrl: 'modules/settings/views/view.html',
        controller: 'SettingsCtrl'
      });
  });

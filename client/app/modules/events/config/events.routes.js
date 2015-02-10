'use strict';
angular.module ('com.module.events')
  .config(function ($stateProvider) {
    $stateProvider.state('app.events', {
      abstract: true,
      url: '/events',
      template: '<section ui-view class="content"></section>',
      data: {
        pageTitle: 'Events',
        pageSubtitle: 'Manage your events here!'
      }
    }).state('app.events.list', {
      url: '',
      templateUrl: 'modules/events/views/list.html',
      controller: 'EventsCtrl'
    }).state('app.events.add', {
      url: '/add',
      templateUrl: 'modules/events/views/form.html',
      controller: 'EventsCtrl'
    }).state('app.events.edit', {
      url: '/:id/edit',
      templateUrl: 'modules/events/views/form.html',
      controller: 'EventsCtrl'
    }).state('app.events.view', {
      url: '/:id',
      templateUrl: 'modules/events/views/view.html',
      controller: 'EventsCtrl'
    });
  });

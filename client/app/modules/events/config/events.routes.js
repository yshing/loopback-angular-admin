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
      },
      ncyBreadcrumb: {
        label: 'Events',
        parent: 'app.home'
      }
    }).state('app.events.list', {
      url: '',
      templateUrl: 'modules/events/views/list.html',
      controller: 'EventsCtrl',
      ncyBreadcrumb: {
        label: 'Events'
      }
    }).state('app.events.add', {
      url: '/add',
      templateUrl: 'modules/events/views/form.html',
      controller: 'EventsCtrl',
      ncyBreadcrumb: {
        label: 'Add new event',
        parent: 'app.events.list'
      }
    }).state('app.events.edit', {
      url: '/:id/edit',
      templateUrl: 'modules/events/views/form.html',
      controller: 'EventsCtrl',
      ncyBreadcrumb: {
        label: 'Edit event',
        parent: 'app.events.list'
      }
    }).state('app.events.view', {
      url: '/:id',
      templateUrl: 'modules/events/views/view.html',
      controller: 'EventsCtrl',
      ncyBreadcrumb: {
        label: 'View event',
        parent: 'app.events.list'
      }
    });
  });

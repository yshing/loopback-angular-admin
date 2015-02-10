'use strict';
angular.module ('com.module.pages')
  .config(function ($stateProvider) {
    $stateProvider.state('app.pages', {
      abstract: true,
      url: '/pages',
      template: '<section ui-view class="content"></section>',
      data: {
        pageTitle: 'Pages',
        pageSubtitle: 'Create pages with rich content!'
      }
    })
      .state('app.pages.list', {
        url: '',
        templateUrl: 'modules/pages/views/list.html',
        controller: 'PagesCtrl'
      })
      .state('app.pages.add', {
        url: '/add',
        templateUrl: 'modules/pages/views/form.html',
        controller: 'PagesCtrl'
      })
      .state('app.pages.edit', {
        url: '/:id/edit',
        templateUrl: 'modules/pages/views/form.html',
        controller: 'PagesCtrl'
      })
      .state('app.pages.view', {
        url: '/:id',
        templateUrl: 'modules/pages/views/view.html',
        controller: 'PagesCtrl'
      });
  });

'use strict';
angular.module('com.module.about')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.about', {
        abstract: true,
        url: '/about',
        template: '<section ui-view class="content"></section>',
        data: {
          pageTitle: 'About',
          pageSubtitle: 'All about this application'
        }
      })
      .state('app.about.index', {
        url: '',
        templateUrl: 'modules/about/views/about.html',
        controller: 'AboutCtrl'
      });
  });

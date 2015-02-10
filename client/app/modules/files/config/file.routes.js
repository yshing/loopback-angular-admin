'use strict';
angular.module ('com.module.files')
  .config (function ($stateProvider) {
    $stateProvider.state ('app.files', {
      abstract: true,
      url: '/files',
      template: '<section ui-view class="content"></section>',
      data: {
        pageTitle: 'Files',
        pageSubtitle: 'Manage your files here!'
      },
      ncyBreadcrumb: {
        parent: 'app.home'
      }
    })
      .state ('app.files.list', {
        url: '',
        templateUrl: 'modules/files/views/list.html',
        controller: 'FilesCtrl',
        ncyBreadcrumb: {
          label: 'Files'
        }
      })
      .state ('app.files.upload', {
        url: '/upload',
        templateUrl: 'modules/files/views/upload.html',
        controller: 'FilesCtrl',
        ncyBreadcrumb: {
          label: 'Upload',
          parent: 'app.files.list'
        }
      });
  });

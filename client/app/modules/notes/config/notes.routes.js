'use strict';
var app = angular.module('com.module.notes');

app.config(function ($stateProvider) {
  $stateProvider.state('app.notes', {
      abstract: true,
      url: '/notes',
      template: '<section ui-view class="content"></section>',
      data: {
        pageTitle: 'Notes',
        pageSubtitle: 'Manage your notes here'
      },
      ncyBreadcrumb: {
        parent: 'app.home'
      }
    }
  ).state('app.notes.list', {
      url: '',
      templateUrl: 'modules/notes/views/list.html',
      controller: 'NotesCtrl',
      ncyBreadcrumb: {
        label: 'Notes'
      }
    }
  ).state('app.notes.add', {
      url: '/add',
      templateUrl: 'modules/notes/views/form.html',
      controller: 'NotesCtrl',
      ncyBreadcrumb: {
        label: 'Add note',
        parent: 'app.notes.list'
      }
    }
  ).state('app.notes.edit', {
      url: '/:id/edit',
      templateUrl: 'modules/notes/views/form.html',
      controller: 'NotesCtrl',
      ncyBreadcrumb: {
        label: 'Edit note',
        parent: 'app.notes.list'
      }
    }
  ).state('app.notes.view', {
      url: '/:id',
      templateUrl: 'modules/notes/views/view.html',
      controller: 'NotesCtrl',
      ncyBreadcrumb: {
        label: 'View note',
        parent: 'app.notes.list'
      }
    }
  );
});

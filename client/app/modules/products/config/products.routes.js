'use strict';
angular.module ('com.module.products')
  .config (function ($stateProvider) {
  $stateProvider
    .state ('app.products', {
    abstract: true,
    url: '/products',
    template: '<section ui-view class="content"></section>',
    data: {
      pageTitle: 'Products',
      pageSubtitle: 'Manage your products here!'
    },
    ncyBreadcrumb: {
      parent: 'app.home'
    }
  })
    .state ('app.products.list', {
    url: '',
    templateUrl: 'modules/products/views/list.html',
    controller: 'ProductsCtrl',
    ncyBreadcrumb: {
      label: 'Products'
    }
  })
    .state ('app.products.add', {
    url: '/add/:categoryId',
    templateUrl: 'modules/products/views/form.html',
    controller: 'ProductsCtrl',
    ncyBreadcrumb: {
      label: 'Add product',
      parent: 'app.products.list'
    }
  })
    .state ('app.products.edit', {
    url: '/:id/edit',
    templateUrl: 'modules/products/views/form.html',
    controller: 'ProductsCtrl',
    ncyBreadcrumb: {
      label: 'Edit product',
      parent: 'app.products.list'
    }
  })
    .state ('app.products.addcategory', {
    url: '/addcategory',
    templateUrl: 'modules/products/views/categoryform.html',
    controller: 'CategoriesCtrl',
    ncyBreadcrumb: {
      label: 'Add category',
      parent: 'app.products.list'
    }
  })
    .state ('app.products.view', {
    url: '/:id',
    templateUrl: 'modules/products/views/view.html',
    controller: 'ProductsCtrl',
    ncyBreadcrumb: {
      label: 'View product',
      parent: 'app.products.list'
    }
  })
    .state ('app.products.editcategory', {
    url: '/editcategory/:categoryId',
    templateUrl: 'modules/products/views/categoryform.html',
    controller: 'CategoriesCtrl',
    ncyBreadcrumb: {
      label: 'Edit category',
      parent: 'app.products.list'
    }
  });
});

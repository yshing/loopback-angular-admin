'use strict';
angular.module('com.module.about')
  .run(function ($rootScope, gettextCatalog) {

    $rootScope.addDashboardBox(gettextCatalog.getString('About'), 'orange', 'ion-information', 0, 'app.about.index');

  });

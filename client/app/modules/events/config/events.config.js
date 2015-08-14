'use strict';
angular.module('com.module.events')
  .run(function($rootScope, Event, gettextCatalog,CoreService) {
    // $rootScope.addMenu(gettextCatalog.getString('Events'), 'app.events.list',
    //   'fa-calendar-o');

    // Event.find(function(data) {
    //   $rootScope.addDashboardBox('Events', 'bg-purple', 'ion-calendar',
    //     data.length, 'app.events.list');
    // });
  console.log(CoreService);
    function EventModuleBoot(){
      $rootScope.addMenu(gettextCatalog.getString('Events'), 'app.events.list',
        'fa-calendar-o');

      Event.find(function(data) {
        $rootScope.addDashboardBox('Events', 'bg-purple', 'ion-calendar',
          data.length, 'app.events.list');
      });
    }
    CoreService.adminModules.register({
      name:gettextCatalog.getString('Events'),
      boot:EventModuleBoot
    })
    CoreService.toastSuccess('Success Load EventModule','')
  });

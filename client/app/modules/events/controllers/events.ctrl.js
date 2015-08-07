/*jshint sub:true*/
'use strict';
angular.module('com.module.events')
  .controller('EventsCtrl', function($scope, $state, $stateParams, CoreService,
    Event, gettextCatalog) {

    var eventId = $stateParams.id;

    var createDate = function(date, time) {

      console.log(date);
      console.log(time);
      if (!date || !time) {
        return date || time;
      }

      var out = angular.copy(time);
      // out.setFullYear(date.getFullYear());
      // out.setMonth(date.getMonth());
      // out.setDate(date.getDate());
      return out;
    };

    var splitDate = function() {
      var event = $scope.event;
      event.sDate = event.sTime = Date.parse(event['start_time']);//event.startTime;
      event.eDate = event.eTime = Date.parse(event['end_time']);
      //      event['start_time'] =  event['end_time'] = null;
    };

    if (eventId) {
      $scope.event = Event.findById({
        id: eventId
      }, function() {
        splitDate();
      }, function(err) {
        console.log(err);
      });
    } else {
      $scope.event = {};
    }

    function loadItems() {
      $scope.events = Event.find();
    }

    loadItems();

    $scope.delete = function(id) {
      CoreService.confirm(gettextCatalog.getString('Are you sure?'),
        gettextCatalog.getString('Deleting this cannot be undone'),
        function() {
          Event.deleteById(id, function() {
            CoreService.toastSuccess(gettextCatalog.getString(
              'Event deleted'), gettextCatalog.getString(
              'Your event is deleted!'));
            loadItems();
            $state.go('app.events.list');
            console.log();
          }, function(err) {
            CoreService.toastError(gettextCatalog.getString(
              'Error deleting event'), gettextCatalog.getString(
              'Your event is not deleted: ') + err);
          });
        },
        function() {
          return false;
        });
    };

    var dateOpen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      this.opened = true;
    };

    $scope.formFields = [{
        key: 'name',
        type: 'text',
        templateOptions:{label: gettextCatalog.getString('Name'),
                required: true}
      }, {
        key: 'description',
        type: 'text',
        templateOptions: {label: gettextCatalog.getString('Description'),
                required: true}
      }, {
        key: 'sDate',
        type: 'date',
        templateOptions: {required: true,
                label: gettextCatalog.getString('Start Date'),
                format: gettextCatalog.getString('dd/MM/yyyy'),
                opened: false,
                switchOpen: dateOpen}
      }, {
        key: 'sTime',
        
        type: 'time',
        templateOptions:{required: true,
                label: gettextCatalog.getString('Start Time'),
                hstep: 1,
                mstep: 5,
                ismeridian: true}
      }, {
        key: 'eDate',
        type: 'date',
        templateOptions:{
          label: gettextCatalog.getString('End'),
          format: gettextCatalog.getString('dd/MM/yyyy'),
          opened: false,
          switchOpen: dateOpen
        }
      }, {
        key: 'eTime',
        type: 'time',
        templateOptions:{
          required: true,
          label: gettextCatalog.getString('End Time'),
          hstep: 1,
          mstep: 5,
          ismeridian: true,
        }
      }

    ];

    $scope.formOptions = {
      //+ uniqueFormId: true,
      // hideSubmit: false,
      // submitCopy: gettextCatalog.getString('Save')
    };
    $scope.alerts = [];

    $scope.onSubmit = function() {
      var event = angular.copy($scope.event);
      event['start_time'] = createDate(event.sDate, event.sTime);
      delete event.sDate;
      delete event.sTime;

      event['end_time'] = createDate(event.eDate, event.eTime);
      delete event.eDate;
      delete event.eTime;

      Event.upsert(event, function() {
        CoreService.toastSuccess(gettextCatalog.getString('Event saved'),
          gettextCatalog.getString('Your event is safe with us!'));
        $state.go('^.list');
      }, function(err) {
        $scope.alerts.push({
          type: 'danger',
          msg: err.data.error.message
        });
        CoreService.toastError(gettextCatalog.getString(
          'Event not added'), err.data.error.message);
        console.log(err);
      });
    };


  });

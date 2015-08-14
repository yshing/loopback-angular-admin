'use strict';
angular.module('com.module.core')
.service('CoreService', ['ENV', 'SweetAlert', 'toasty','$filter', function(ENV,
  SweetAlert, toasty,$filter) {

  var adminModules = {};

  adminModules = {
    schema:{
      name: 'string',
      boot: function(){},
    },
    list:[],
    register:function(ModuleRegisterObject){
      if (ModuleRegisterObject instanceof Object){
        var found = $filter('filter')(adminModules.list,{name:ModuleRegisterObject.name},true);
        if (found.length === 0 ){
          adminModules.list.push(ModuleRegisterObject);
        }
      }
    },
    boot:function(){
      adminModules.list = adminModules.list.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      for (var i = adminModules.list.length - 1; i >= 0; i--) {
        if(adminModules.list[i].boot instanceof Function){ adminModules.list[i].boot.call() }
      };
    }
  }

  this.adminModules = adminModules;
  window.A=adminModules;
  this.env = ENV;

  this.alert = function(title, text) {
    SweetAlert.swal(title, text);
  };

  this.alertSuccess = function(title, text) {
    SweetAlert.swal(title, text, 'success');
  };

  this.alertError = function(title, text) {
    SweetAlert.swal(title, text, 'error');
  };

  this.alertWarning = function(title, text) {
    SweetAlert.swal(title, text, 'warning');
  };

  this.alertInfo = function(title, text) {
    SweetAlert.swal(title, text, 'info');
  };

  this.confirm = function(title, text, successCb, cancelCb) {
    var config = {
      title: title,
      text: text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    };
    this._swal(config, successCb, cancelCb);
  };

  this._swal = function(config, successCb, cancelCb) {
    SweetAlert.swal(config,
      function(confirmed) {
        if (confirmed) {
          successCb();
        } else {
          cancelCb();
        }
      });
  };

  this.toastSuccess = function(title, text) {
    toasty.pop.success({
      title: title,
      msg: text,
      sound: false
    });
  };

  this.toastError = function(title, text) {
    toasty.pop.error({
      title: title,
      msg: text,
      sound: false
    });
  };

  this.toastWarning = function(title, text) {
    toasty.pop.warning({
      title: title,
      msg: text,
      sound: false
    });
  };

  this.toastInfo = function(title, text) {
    toasty.pop.info({
      title: title,
      msg: text,
      sound: false
    });
  };


}]);

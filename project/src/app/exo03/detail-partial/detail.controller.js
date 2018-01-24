(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    vm.msg = 'Welcome All!';
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
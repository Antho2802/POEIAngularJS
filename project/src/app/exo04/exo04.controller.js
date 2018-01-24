(function() {
  'use strict';

  function Exo04Ctrl($location, settingService , meteoService) {
    var vm = this;
    vm.msg = '';
    vm.clic = clic;
    vm.setting = settingService;
    vm.meteoService = meteoService;

    function clic(){
        settingService.city = vm.msg;
        meteoService.getMeteo();
    }

  }

  Exo04Ctrl.$inject = ['$location','settingService', 'meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
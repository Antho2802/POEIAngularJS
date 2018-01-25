(function() {
  'use strict';

  function FinalCtrl($location,searchConfigService,cocktailSearchService) {
    var vm = this;
    vm.msg = '';
    vm.clic = clic;
    vm.search = searchConfigService;
    vm.cocktailSearchService = cocktailSearchService;
    
      
      function clic(){
        searchConfigService.ingredient = vm.msg;
        cocktailSearchService.getCocktails();
        console.log(searchConfigService.ingredient);
    }
    
  }

  FinalCtrl.$inject = ['$location','searchConfigService','cocktailSearchService'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
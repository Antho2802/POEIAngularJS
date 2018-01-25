(function() {
    'use strict';
  
    function searchConfigService() {
      var search = {};
      search.ingredient = '';

      

      return search;
    }

    searchConfigService.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfigService', searchConfigService);
  
})();
(function() {
    'use strict';
  
    function cocktailSearchService($http,searchConfigService) {
      var cocktail = {};
      cocktail.cocktailList = [];
      cocktail.getCocktails = getCocktails;
      function getCocktails(){
          console.log('plooop');
            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ searchConfigService.ingredient)
            .then(function(response){
                console.log('Success: %o', response);
                cocktail.cocktailList = response.data.drinks;
                
            })
            .catch(function(error){
                console.log('Error: %o', error);
                cocktail.cocktailList = [];
            });
        }
      

      return cocktail;
    }

    cocktailSearchService.$inject = ['$http','searchConfigService'];
    
    angular.module('daproject')
        .factory('cocktailSearchService', cocktailSearchService);
  
})();
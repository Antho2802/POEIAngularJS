(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};
      service.meteoListe = [];
      service.getMeteo = getMeteo;
      
        function getMeteo(){
            return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + settingService.city + '&APPID=64065898984ff139d99d3ab609bcd025&units=metric')
            .then(function(response){
                console.log('Success: %o', response);
                service.meteoListe = response.data.list;
                console.log(service.meteoListe);
            })
            .catch(function(error){
                console.log('Error: %o', error);
                service.meteoListe = [];
            });
        }
        
        return service;
    }
    
    meteoService.$inject = ['$http','settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();
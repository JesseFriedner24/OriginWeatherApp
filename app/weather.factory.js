(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {
        var service = {
            getLocationWeather: getLocationWeather
        };
        return service;

        ////////////////

        function getLocationWeather(city) {

            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather',
                params: {
                    APPID: '3a9e7622dcfa46987bcd0995e9271255',
                    q: city,
                    units: 'imperial'



                },
            }).then(function(response) {

                return response;

            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['WeatherFactory', 'toastr'];

    /* @ngInject */
    function WeatherCtrl(WeatherFactory, toastr) {
        var vm = this;
        vm.title = 'WeatherCtrl';

        //weather info
        vm.cityData;
        //search history 
        vm.searchHistory = [];
        //adds to weather history
        vm.addSearch = addSearch;
        vm.activate = activate;

        function activate(city) {
            var promise = WeatherFactory.getLocationWeather(city);
            promise.then(function(data) {
                vm.cityData = data;
                toastr.success("Got the Weather!");
                addSearch();

            });

        }
        ////////////////
        function addSearch() {
            vm.searchHistory.push({
                "event": vm.cityData.data.name,
                "timeAndDate": Date.now()

            });
        }





    }
})();

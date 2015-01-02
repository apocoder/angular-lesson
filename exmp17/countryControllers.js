var countryControllers = angular.module('countryControllers', []);

//countries factory sini inject ediyoruz
countryControllers.controller('CountryListCtrl', function ($scope, countries){
  //Factory List metodu
    countries.list(function(countries) {
    $scope.countries = countries;
  });
});

countryControllers.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
    //Factory detail metodu
  countries.find($routeParams.countryId, function(country) {
    $scope.country = country;
  });
});

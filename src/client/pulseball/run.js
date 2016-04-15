angular.module('pulseball').run(function ($http) {
    $http.get('src/data/rankings.json').then(function (response) {
        PULSEBALL.init(response.data);
    });
});

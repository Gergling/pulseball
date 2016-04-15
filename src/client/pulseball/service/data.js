angular.module('pulseball').service('pulseballServiceData', function ($http) {
    var promise = $http.get('src/data/rankings.json').then(function (response) {
        PULSEBALL.init(response.data);
    });

    this.promise = function () {return promise;};
});

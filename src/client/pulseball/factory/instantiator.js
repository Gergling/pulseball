angular.module('pulseball').factory('pulseballFactoryInstantiator', function () {
    var PulseBall = function () {
        var rankings;
        this.init = function (rankingsJson) {
            rankings = rankingsJson;
        };
        this.addMatch = function (match) {
            
        };
    };

    return new PulseBall();
});

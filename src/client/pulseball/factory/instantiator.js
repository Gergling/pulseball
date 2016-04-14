angular.module('pulseball').factory('pulseballFactoryInstantiator', function () {
    var PulseBall = function () {
        var rankings;

        this._winner = function (match) {
            var outcomes = {
                A: 0,
                B: 1,
            };
            var teamIDX = outcomes[match.outcome];
            if (typeof teamIDX !== 'number') {
                throw new Error('Looking for winner in a match which had no winners.')
            }
            return match.teams[teamIDX];            
        };

        this.init = function (rankingsJson) {
            rankings = rankingsJson;
        };
        this.addMatch = function (match) {
            
        };
    };

    return new PulseBall();
});

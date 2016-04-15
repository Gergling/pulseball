angular.module('pulseball').factory('pulseballFactoryInstantiator', function () {
    var PulseBall = function () {
        var rankings;

        var rankingTeam = function (id) {
            return rankings.filter(function (rank) {
                return rank.team.id === id;
            })[0];
        };

        this._rankingTeam = rankingTeam;

        this.init = function (rankingsJson) {
            rankings = rankingsJson;
        };
        this.addMatch = function (match) {
            
        };
    };

    return new PulseBall();
});

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
            // Choose teams from rankings using match data
            var teamRanks = match.teams.map(function (team, idx) {
                return rankingTeam(team.id);
            });
            var differenceTenth = Math.min(10, Math.max(-10, teamRanks[0].pts - teamRanks[1].pts)) / 10;
            var ratingChange;
            switch (match.outcome) {
                case 'A':
                    ratingChange = 1 - differenceTenth;
                    teamRanks[0].pts += ratingChange;
                    teamRanks[1].pts -= ratingChange;
                break;
                case 'B':
                    ratingChange = 1 + differenceTenth;
                    teamRanks[0].pts -= ratingChange;
                    teamRanks[1].pts += ratingChange;
                break;
                case 'D':
                    teamRanks.forEach(function (teamRank) {
                        teamRank.pts += differenceTenth;
                    });
                break;
            }

            rankings = rankings.sort(function (a, b) {
                //console.log(a.team.id, b.team.id, a.pts, b.pts);
                return a.pts > b.pts;
            });
            
            rankings.forEach(function (x) {
                console.log(x.team.id, x.pts);
            });

            return rankings;
        };
    };

    return new PulseBall();
});

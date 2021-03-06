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
        this.rankings = function () {return rankings;};
        this.addMatch = function (match) {
            // Choose teams from rankings using match data
            var teamRanks = match.teams.map(function (team, idx) {
                teamRank = rankingTeam(team.id);
                // Check whether home team
                if (match.venue.country === team.name) {
                    teamRank.pts += 3;
                }
                return teamRank;
            });
            var differenceTenth = Math.round(Math.min(10, Math.max(-10, teamRanks[0].pts - teamRanks[1].pts)) * 10) / 100;
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

            rankings.forEach(function (rank) {
                if (match.venue.country === rank.team.name) {
                    rank.pts -= 3;
                }
            });

            rankings = rankings.sort(function (a, b) {
                return b.pts - a.pts;
            });

            return rankings;
        };
    };

    return new PulseBall();
});

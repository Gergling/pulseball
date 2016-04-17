angular.module('pulseball').directive('pulseballMatch', function () {
    return {
        templateUrl: 'src/client/pulseball/partial/match.html',
        controllerAs: 'pulseballControllerMatch',
        controller: function ($scope) {
            // Input:
            // Venue country, teams, scores, outcome
            this.countries = function () {
                return PULSEBALL.rankings().map(function (ranking) {
                    // Output available country objects
                    return ranking.team;
                });
            };
            this.teams = [
                ['team1', 'Team1'],
                ['team2', 'Team2']
            ];

            var model = {};

            this.model = function (name, value) {
                if (name) {
                    if (value) {
                        model[name] = value;
                    }
                    return model[name];
                }
                return model;
            };

            this.teams.forEach(function (teamData) {
                model[teamData[0]] = {};
            });
            
            this.exposed = model;

            this.submit = function () {
                var outcome = "D";
                if (model.team1.score > model.team2.score) {
                    outcome = "A";
                } else if (model.team1.score < model.team2.score) {
                    outcome = "B";
                }

                PULSEBALL.addMatch({
                    "venue": {
                        "country": model.venue
                    },
                    "teams": [
                        model.team1,
                        model.team2
                    ],
                    "outcome": outcome
                });
            };
        }
    };
});

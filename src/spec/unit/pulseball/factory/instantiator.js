describe('pulseballFactoryInstantiator', function () {
    var instance;

    beforeEach(function () {
        module('pulseball');

        inject(function ($injector) {
            instance = $injector.get('pulseballFactoryInstantiator');
        });
    });

    it('instance is an object', function () {
        expect(typeof instance).toBe('object');
    });

    describe('the instance', function () {
        var ranking = [
            { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
            { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
            { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 },
            { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 },
            { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
        ];

        beforeEach(function () {
            instance.init(ranking);
        });

        describe('#_winner(match)', function () {
            var mockMatch = {
                teams: [{id: 10}, {id: 20}]
            };
            // Check response for A, B, D, N
            it('returns team 10 for outcome "A"', function () {
                expect(instance._winner(angular.extend(mockMatch, {outcome: 'A'})).id).toBe(10);
            });
            it('returns team 20 for outcome "B"', function () {
                expect(instance._winner(angular.extend(mockMatch, {outcome: 'B'})).id).toBe(20);
            });
            it('returns an exception for outcomes "D" or "N"', function () {
                ['D', 'N'].forEach(function (outcome) {
                    expect(function () {
                        return instance._winner(angular.extend(mockMatch, {outcome: outcome}));
                    }).toThrow(new Error('Looking for winner in a match which had no winners.'));
                });
            });
        });

        describe('#addMatch(match)', function () {
            // Put in a match object
            var newRanking;
            var expectedRanking = [
                { "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
                { "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },
                { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 53.68 },
                { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 51.59 },
                { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
            ];
            var match = {
                "matchId": 2524,
                "description": "Match 2",
                "venue": {
                    "id": 900,
                    "name": "Stadium",
                    "city": "Paris",
                    "country": "France"
                },
                "teams": [
                    {
                        "id": 2,
                        "name": "France",
                        "abbreviation": "FRA"
                    },
                    {
                        "id": 1,
                        "name": "England",
                        "abbreviation": "ENG"
                    }
                ],
                "scores": [
                    19,
                    23
                ],
                "status": "C",
                "outcome": "B"
            };

            beforeEach(function () {
                newRanking = instance.addMatch(match);
            });

            it('returns the correct ranking', function () {
                // Check returned object is of type ranking
                expect(newRanking).toBe(expectedRanking);
            });
        });
    });
});

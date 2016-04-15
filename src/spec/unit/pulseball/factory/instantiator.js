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

        describe('#_rankingTeam(id)', function () {
            it('returns a team when given an id', function () {
                expect(instance._rankingTeam(1).team.id).toBe(1);
                expect(instance._rankingTeam(2).team.id).toBe(2);
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

            describe('returns the correct ranking', function () {
                // Check returned object is of type ranking
                it('overall', function () {
                    expect(newRanking).toBe(expectedRanking);
                });

                expectedRanking.forEach(function (rank, idx) {
                    describe('ranking at ' + idx, function () {
                        it('id is correct', function () {
                            expect(rank.team.id).toBe(newRanking[idx].team.id);
                        });
                        it('pts is correct', function () {
                            expect(rank.pts).toBe(newRanking[idx].pts);
                        });
                    });
                });
            });
        });
    });
});

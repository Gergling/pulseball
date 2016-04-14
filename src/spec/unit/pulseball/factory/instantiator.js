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
        describe('#addMatch(match)', function () {
            // Put in a match object
            it('returns a ranking', function () {
                // Check returned object is of type ranking
            });
        });
    });
});

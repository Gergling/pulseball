angular.module('pulseball').directive('pulseballRankings', function () {
    return {
        templateUrl: 'src/client/pulseball/partial/rankings.html',
        controllerAs: 'pulseballControllerRankings',
        controller: function () {
            this.list = PULSEBALL.rankings;
        }
    };
});

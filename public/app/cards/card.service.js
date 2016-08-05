'use strict'

app.factory('CardService', ['$stateParams', '$resource', function ($stateParams, $resource) {

    return {
        getResource: function () {
            return $resource(null, null, {
                'getAll': {
                    url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=frFR',
                    method: 'GET',
                    isArray: false,
                    headers: { 'X-Mashape-Key': 'jm8bmLRmtemsh4Ts0Qom8GtadGptp14goikjsnO0BAk1hONmGd' }
                }
            });
        }
    }
}]);
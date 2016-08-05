'use strict'
app.controller('CardController', ['$state', '$stateParams','CardService', function ($state, $stateParams,CardService) {
    var that = this;
    this.card = null;

    this.getAllCards = function () {
        CardService.getResource().getAll({
        }, function (data) {
            that.card = data;
        });
    };
}]);
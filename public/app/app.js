'use strict'

/**
 * Vous êtes ici dans le fichier "principal" du projet Angular.
 * C'est ici qu'est définit le nom de l'application et les routes du site.
 * Si Angular 1 ne vous est pas du tout familié, voir le lien ci-dessous, pour apprendre (rapidement) :
 * A noté qu'il faut impérativement connaître Javascript
 * https://manolenso.gitbooks.io/apprendre-angularjs-en-un-jour/content/
 * 
 */


// Définition de l'application et déclaration des dépendances utilisées
var app = angular.module('hearthstone', [
    'ngResource',
    'ui.router',
    'ui.bootstrap'
]);


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('cardView', {
        url: '/cards',
        templateUrl: 'app/cards/card_view.html',
        controller: 'CardController',
        controllerAs: 'cardController'
    })
    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get("$state");
        $state.go('cardView');
    });
});


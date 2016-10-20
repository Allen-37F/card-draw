(function () {
  'use strict'

  angular.module('CardDrawApp.components.hand')
    .service('HandService', HandService)

  HandService.$inject = ['$http']

  const baseUrl = 'https://deckofcardsapi.com/api/deck'
  const newDeckPath = '/new/draw/?count=52'

  function HandService ($http) {
    this.deck = []
    this.draw = () => {
      // Get the deck and its id
      // Make another request to get all the cards back
      $http.get(baseUrl + newDeckPath).then(({ data: { cards }}) => {
        console.log(cards);
      })
    }
  }
})()

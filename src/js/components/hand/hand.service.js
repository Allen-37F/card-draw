(function () {
  'use strict'

  angular.module('CardDrawApp.components.hand')
    .service('HandService', HandService)

  HandService.$inject = ['$http']

  const baseUrl = 'https://deckofcardsapi.com/api/deck'
  const newDeckPath = '/new/draw/?count=52'

  function HandService ($http) {
    this.deck = []
    this.hand = []

    this.draw = () => {
      if (!this.deck.length) {
        return $http.get(baseUrl + newDeckPath)
          .then(({ data: { cards }}) => {
            this.deck = cards
            drawACard.call(this) // .bind, .apply, .call
          })
      } else {
        drawACard.call(this)
      }
    }

    function drawACard () {
      let selectedCard = this.deck.pop()
      this.hand.push(selectedCard)
      console.log(this.deck.length, this.hand)
    }
  }
})()

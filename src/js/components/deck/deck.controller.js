(function () {
  'use strict'

  angular.module('CardDrawApp.components.deck')
    .controller('DeckController', DeckController)

  DeckController.$inject = ['HandService']

  function DeckController (HandService) {
    this.draw = () => HandService.draw()
  }
})()

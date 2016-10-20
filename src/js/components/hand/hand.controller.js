(function () {
  'use strict'

  angular.module('CardDrawApp.components.hand')
    .controller('HandController', HandController)

  HandController.$inject = ['HandService']

  function HandController (HandService) {
    this.hand = HandService.hand
    HandService.draw()
  }
})()

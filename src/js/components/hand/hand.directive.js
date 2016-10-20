(function () {
  'use strict'

  angular.module('CardDrawApp.components.hand')
    .directive('cdHand', HandDirective)

    HandDirective.$inject = []

    function HandDirective () {
      return {
        restrict: 'E',
        controller: 'HandController',
        template: '<p>hellll yeah</p>'
      }
    }
})()

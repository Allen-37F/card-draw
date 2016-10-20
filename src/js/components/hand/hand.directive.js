(function () {
  'use strict'

  angular.module('CardDrawApp.components.hand')
    .directive('cdHand', HandDirective)

    HandDirective.$inject = []

    function HandDirective () {
      return {
        scope: {},
        restrict: 'E',
        controller: 'HandController',
        controllerAs: 'vm',
        templateUrl: './js/components/hand/hand.html'
      }
    }
})()

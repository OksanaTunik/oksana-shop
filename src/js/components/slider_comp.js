(function () {
  'use strict';

  Number.prototype.mod = function (n) {
      return ((this % n) + n) % n;
  };

  function SliderCtrl($timeout, $interval) {
    var vm = this;

    vm.currentSlide = 0;

    vm._switchTo = _switchTo;

    vm.$onInit = function () {
      vm.slideInterval = parseFloat(vm.slideInterval);

      if (vm.slideInterval > 0) {
        $interval(function () {
          vm._switchTo('next');
        }, vm.slideInterval * 1000);
      }
    };

    function _switchTo(direction) {
      vm.targetSlideIdx = (vm.currentSlide + ({ 'next': 1, 'prev': -1 }[direction])).mod(vm.images.length);
      vm.targetSlideClass = direction;

      vm.animating = true;

      $timeout(function () {
        vm.animating = false;
        vm.currentSlide = vm.targetSlideIdx;
        vm.targetSlideIdx = null;
      }, 1 * 1000); // from slider.less
    }
  }

  angular
    .module('ShoppingCartApp')
    .component('slider', {
      bindings: {
        images: '<',
        slideInterval: '<'
      },
      controller: SliderCtrl,
      template: `
        <div class="slider-container">
            <div class="slider-viewport" ng-class="{ 'animating-next': $ctrl.animating && $ctrl.targetSlideClass == 'next', 'animating-prev': $ctrl.animating && $ctrl.targetSlideClass == 'prev' }">
                <div class="slide" ng-repeat="image in $ctrl.images" ng-class="{ current: $ctrl.currentSlide == $index, next: $ctrl.animating && $ctrl.targetSlideIdx == $index && $ctrl.targetSlideClass == 'next', prev: $ctrl.animating && $index == $ctrl.targetSlideIdx && $ctrl.targetSlideClass == 'prev' }">
                    <img ng-src="{{ image }}" alt="" />
                </div>
            </div>
        </div>
      `
    });
})();

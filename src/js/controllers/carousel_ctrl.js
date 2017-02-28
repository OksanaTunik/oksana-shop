(function () {
  'use strict';

  angular
    .module('ShoppingCartApp')
    .controller('CarouselCtrl', CarouselCtrl);

  function CarouselCtrl() {
    var vm = this;

    vm.cart = {
      items: []
    };

    vm.selectedProduct = null;
    vm.selectedImageIndex = 0;

    vm.toggleProductDetails = toggleProductDetails;

    act();

    function act() {
      // TODO: fetch from API
      vm.slides = [
        {
          image: ['/img/slides/slide3.jpg']
        },
        {
          image: ['/img/slides/slide2.jpg']
        },
        {
          image: ['/img/slides/slide3.jpg']
        }
      ];
    }

    function toggleProductDetails(product) {
      if (vm.selectedProduct && product.id == vm.selectedProduct.id) {
        vm.selectedProduct = null;

        clearInterval(vm.selectedImageIndexIntervalId);
      } else {
        vm.selectedProduct = product;
        vm.selectedImageIndex = 0;
        vm.changeSelectedImageIndexTimeout = 5 * 1000;

        vm.selectedImageIndexIntervalId = setInterval(function () {
          vm.selectedImageIndex = (vm.selectedImageIndex + 1) % vm.selectedProduct.images.length;
          $scope.$apply();
        }, vm.changeSelectedImageIndexTimeout);
      }
    }

    // function slideShow() {
    //     vm.slideshow = 1;
    //     vm.slideTimer =
    //     $timeout(function interval() {
    //       $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
    //       slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    //     }, slidesTimeIntervalInMs);
    // }

  }
})();

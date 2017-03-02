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

    function startGalleryAutoScroll() {
    }

  }
})();
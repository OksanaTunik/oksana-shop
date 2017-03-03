(function () {
  'use strict';

  angular
    .module('ShoppingCartApp')
    .controller('CarouselCtrl', CarouselCtrl);

  function CarouselCtrl($scope) {
    var vm = this;

    vm.cart = {
      items: []
    };

    activ();

    function activ() {
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
  }
})();

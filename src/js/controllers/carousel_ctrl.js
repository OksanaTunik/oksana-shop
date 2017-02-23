(function () {
  'use strict';

  angular
    .module('ShoppingCartApp')
    .controller('CarouselCtrl', CarouselCtrl);

  function CarouselCtrl() {
    var vm = this;

    act();

    function act() {
      // TODO: fetch from API
      vm.slides = [
        {
          image: ['/img/slides/slide1.jpg']
        },
        {
          image: ['/img/slides/slide2.jpg']
        },
        {
          image: ['/img/slides/slide3.jpg']
        }
      ];
    }

    var slides = vm.slides;
    console.log(slides);
  }
})();

(function () {
  'use strict';

  angular
    .module('ShoppingCartApp')
    .controller('IndexCtrl', IndexCtrl);

  function IndexCtrl($scope) {
    var vm = this;

    vm.cart = {
      items: []
    };

    vm.selectedProduct = null;
    vm.selectedImageIndex = 0;

    vm.getTotal = getTotal;
    vm.addToCart = addToCart;
    vm.toggleProductDetails = toggleProductDetails;

    activate();

    function activate() {
      // TODO: fetch from API
      vm.products = [
        {
          id: 1,
          title: 'Poducha #1',
          price: 9.99,
          description: 'Super poducha dziecięca w rybim kształcie Super poducha-chmurka dziecięca Super poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięca',
          images: ['/img/products/5.jpg', '/img/products/1.jpg', '/img/products/0.jpg', '/img/products/3.jpg', '/img/products/2.jpg', '/img/products/4.jpg'],
          amount: 1
        },
        {
          id: 2,
          title: 'Poducha #2',
          price: 9.99,
          description: 'Super poducha dziecięca w kształcie gwiazdki Super poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięca',
          images: ['/img/products/4.jpg', '/img/products/1.jpg', '/img/products/0.jpg', '/img/products/3.jpg', '/img/products/2.jpg', '/img/products/5.jpg'],
          amount: 1
        },
        {
          id: 3,
          title: 'Poducha #3',
          price: 9.99,
          description: 'Super poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięca',
          images: ['/img/products/1.jpg', '/img/products/5.jpg', '/img/products/0.jpg', '/img/products/3.jpg', '/img/products/2.jpg', '/img/products/4.jpg'],
          amount: 1
        },
        {
          id: 4,
          title: 'Poducha #4',
          price: 9.99,
          description: 'Super poducha okrągła dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięca',
          images: ['/img/products/2.jpg', '/img/products/1.jpg', '/img/products/0.jpg', '/img/products/3.jpg', '/img/products/5.jpg', '/img/products/4.jpg'],
          amount: 5
        },
        {
          id: 5,
          title: 'Kocyk #1',
          price: 19.99,
          description: 'Super koc dziecięcy w stylistyce poduchi-chmurki Super koc dziecięcy w sty<br>listyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurki',
          images: ['/img/products/4.jpg', '/img/products/2.jpg', '/img/products/0.jpg', '/img/products/3.jpg', '/img/products/1.jpg', '/img/products/4.jpg'],
          amount: 1
        },
        {
          id: 6,
          title: 'Poducha #5',
          price: 9.99,
          description: 'Super poducha okrągła dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięca',
          images: ['/img/products/6.jpg', '/img/products/3.jpg', '/img/products/0.jpg', '/img/products/1.jpg', '/img/products/2.jpg', '/img/products/4.jpg'],
          amount: 5
        },
        {
          id: 7,
          title: 'Poducha #4',
          price: 9.99,
          description: 'Super poducha okrągła dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięcaSuper poducha-chmurka dziecięca',
          images: ['/img/products/3.jpg', '/img/products/4.jpg', '/img/products/0.jpg', '/img/products/0.jpg', '/img/products/2.jpg', '/img/products/4.jpg'],
          amount: 5
        }
      ];
    }

    function getTotal() {
      vm.cart.items.reduce(function (acc, item) { return acc + (item.price * item.amount); }, 0);
    }

    function addToCart(product) {
      vm.cart.items.push(product);
      product.amount--;
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
  }
})();

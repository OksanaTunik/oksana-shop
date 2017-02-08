(function () {
  'use strict';

  angular
    .module('ShoppingCartApp')
    .controller('IndexCtrl', IndexCtrl);

  function IndexCtrl() {
    var vm = this;

    vm.cart = {
      items: []
    };

    vm.selectedProduct = null;

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
          description: 'Super poducha dziecięca w rybim kształcie',
          images: ['1', '2', '3', '4'],
          amount: 1
        },
        {
          id: 2,
          title: 'Poducha #2',
          price: 9.99,
          description: 'Super poducha dziecięca w kształcie gwiazdki',
          images: [''],
          amount: 1
        },
        {
          id: 3,
          title: 'Poducha #3',
          price: 9.99,
          description: 'Super poducha-chmurka dziecięca',
          images: [''],
          amount: 1
        },
        {
          id: 4,
          title: 'Poducha #4',
          price: 9.99,
          description: 'Super poducha okrągła dziecięca',
          images: [''],
          amount: 5
        },
        {
          id: 5,
          title: 'Kocyk #1',
          price: 19.99,
          description: 'Super koc dziecięcy w stylistyce poduchi-chmurki Super koc dziecięcy w sty<br>listyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurki',
          images: [''],
          amount: 1
        },
        {
          id: 6,
          title: 'Poducha #5',
          price: 9.99,
          description: 'Super poducha okrągła dziecięca',
          images: [''],
          amount: 5
        },
        {
          id: 7,
          title: 'Poducha #4',
          price: 9.99,
          description: 'Super poducha okrągła dziecięca',
          images: [''],
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
      } else {
        vm.selectedProduct = product;
      }
    }
  }
})();

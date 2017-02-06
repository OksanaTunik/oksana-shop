import '../utilities/array';

import app from '../app';

app.controller('IndexCtrl', ['$scope', $scope => {
  let products = [
    {
      title: 'Poducha #1',
      price: 9.99,
      description: 'Super poducha dziecięca w rybim kształcie',
      images: ['1', '2', '3', '4'],
      amount: 1
    },
    {
      title: 'Poducha #2',
      price: 9.99,
      description: 'Super poducha dziecięca w kształcie gwiazdki',
      images: [''],
      amount: 1
    },
    {
      title: 'Poducha #3',
      price: 9.99,
      description: 'Super poducha-chmurka dziecięca',
      images: [''],
      amount: 1
    },
    {
      title: 'Poducha #4',
      price: 9.99,
      description: 'Super poducha okrągła dziecięca',
      images: [''],
      amount: 5
    },
    {
      title: 'Kocyk #1',
      price: 19.99,
      description: 'Super koc dziecięcy w stylistyce poduchi-chmurki Super koc dziecięcy w sty<br>listyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurkiSuper koc dziecięcy w stylistyce poduchi-chmurki',
      images: [''],
      amount: 1
    }
  ];

  $scope.columns = 3;
  $scope.productRows = products.inChunksOf($scope.columns);

  $scope.cart = {
    items: []
  };

  $scope.getTotal = () => $scope.cart.items.reduce(function (acc, item) { return acc + (item.price * item.amount); }, 0);

  $scope.addToCart = product => {
    $scope.cart.items.push(product);
    product.amount--;
  };
}]);

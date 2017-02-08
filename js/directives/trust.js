(function () {
  'use strict';

  angular
    .module('ShoppingCartApp')
    .filter('trust', TrustFilter);

  TrustFilter.$inject = ['$sce'];

  function TrustFilter($sce) {
    return htmlCode => $sce.trustAsHtml(htmlCode);
  }
})();

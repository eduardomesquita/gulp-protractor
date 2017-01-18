(function(){
    
    'use strict';
    
    angular
        .module('sandbox-app')
        .factory('vendasService', [vendasService]);

    function vendasService() {

        var vendas = [];

        var getVendas = function(){
            return vendas;
        };

        return {
            getVendas: getVendas
        };
    }

})();

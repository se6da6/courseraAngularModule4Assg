(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'src/items/items.component.template.html',
        controller: ItemsController,
        bindings: {
          items: '<',
          
        }
      });
  })();
  
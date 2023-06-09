(function () {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/src/home/home.template.html'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: ' /src/categories/categories.template.html',
          controller: 'categoriesController as categoriesCtrl',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: '/src/items/items.template.html',
            controller: 'itemsController as itemsCtrl',
            params: {
              categoryShortName: null,
              categoryName: null
          },
            resolve: {
              items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
              }]
            }
          });
      }
    })();
 
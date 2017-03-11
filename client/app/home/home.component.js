var home = {
  template: `
    home page

    <div ui-view ></div>
  `
}

angular
  .module('homeModule')
  .component('home', home)
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('homeState', {
        url: '/',
        component: 'home'
      });
  });

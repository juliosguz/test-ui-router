var contact = {
  template: `
    contact page
    <div ui-view></div>
  `
}

angular
  .module('contactModule')
  .component('contact', contact)
  .config(function($stateProvider) {

    $stateProvider
      .state('contactState', {
        url: '/contact',
        component: 'contact'
      });
  });



/*

Variable ->  contactState      
Configuracion ->  /contact
                  contact

homeState
  /
  home

shopState
  /shop
  shopComponent  */
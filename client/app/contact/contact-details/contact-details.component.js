var contactDetails = {
  template: `
    contact details
  `
}

//   ^/details      /details      

//   /details       /contact/details      

angular
  .module('contactModule')
  .component('contactDetails', contactDetails)
  .config(function($stateProvider) {
    $stateProvider
      .state('contactDetails', {
        parent: 'contactState',
        url: '/details', 
        component: 'contactDetails'
      });
  });


  
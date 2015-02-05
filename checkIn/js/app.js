var employeeListApp = angular.module('employeeListApp', ['ui.router']);

employeeListApp
.config(['$stateProvider', '$urlRouterProvider', 
  function ($stateProvider, $urlRouterProvider){
  	
  	$urlRouterProvider.otherwise('/index');
  	
  	$stateProvider
    .state('index', {
      title: 'index',
      url: '/index',
      templateUrl: 'home.html',
      resolve: {
        allEmps: ['Employee', 'Context', function(Employee, Context){
          if(Context.all.employees.length == 0){
            return Employee.loadJSON()
          }
        }]
      }
    })
    .state('check-in', {
      title: 'check-in',
      url: '/check-in',
      templateUrl: 'check-in.html',
      controller: 'employeeListCtrl'
    })
    .state('check-out', {
      title: 'check-out',
      url: '/check-out',
      templateUrl: 'check-out.html',
      resolve: {
        employeeResolve: ['Employee', 'Context', function(Employee, Context){
          return Employee.getAllEmployees()
          .then(function(employees){
            Context.all.employees = employees;
            return employees;
          });
        }]
      },
      controller: 'employeeListCtrl'
    })
    
  }
]);

// employeeListApp
// .run(function($rootScope, $state){
//   $rootScope
//     .$on('$stateChangeStart', 
//         function(event, toState, toParams, fromState, fromParams){ 
//             console.log("State Change: transition begins!");
//             console.log(toState);
            
//     });
//   $rootScope
//   .$on('$stateChangeError',
//     function(event, toState, toParams, fromState, fromParams, error){ 
//       console.log("State Change: Error!" + JSON.stringify(fromState.name));
//       console.log("State Change: Error!" + JSON.stringify(toState.name));
//       console.log(error);

//   });
// });

'use strict';

employeeListApp.controller('employeeListCtrl', function($scope, Context) { //, Context

	angular.forEach(Context, function(property,key){
		$scope[key] = property;
	});

});
    
    

  // employeeListApp.service('Context', function($q, Employee) {
  //   var context = this;
  //   this.all = {
  //     'employees': []
  //   };
  //   // this.relevant = {
  //   //   'employees' : []
  //   // };
  //   this.add = {
      
  //     'employee': function(name, gender, id, title){
  //       var newEmp = new Employee({name: name, gender: gender, empID: id, empTitle: title});
  //       context.all.employees.push(newEmp);
  //     }
  //   }
  //   this.remove = 
  //   {
  //       'employee' : function(emp)
  //       {
  //         var index = context.all.employees.indexOf(emp);
  //         context.all.employees.splice(1, index);
  //       }
        
  //   }
  //   console.log(context);

  // });
  

employeeListApp.service('Context', function($state, Employee) {
  var context = this;
  
  this.all = {
    'employees': []
  };

  this.add = {
    'employee': function(name, gender, empId, title){
      console.log('Adding an employee');
      var newEmp = new Employee({name: name, gender: gender, empID: empId, empTitle: title});
      context.all.employees.push(newEmp);
    }
  }
  
  this.remove = 
  {
    'employee' : function(emp)
    {
      console.log('Removing an employee');
      var index = context.all.employees.indexOf(emp);
      context.all.employees.splice(index, 1);
      Employee.remove(emp);
    }
  }
  
  this.go = function(dest){
    $state.go(dest);
  }
  
  return context;
});
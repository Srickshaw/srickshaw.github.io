employeeListApp.factory('Employee', function($http, $q) {
    
    var empList = {};
    var nextId= -1;
    
    function Employee(json)
    {
      this.init(json);
    }
    
    Employee.prototype.init = function(json)
    {
      var self = this;
      angular.forEach(json, function(value,key)
      {
        self[key] = value;
      });
      
      if(!self.id){
        self.id = nextId;
        nextId = nextId-1;
      }
      
      if (!self.image){
        if (self.gender === "male"){
            self.image = "img/default-male.png";
        }
        else if(self.gender === "female") {
            self.image = "img/default-female.png";
        }
      } 
      self.checkInTime = new Date();

      empList[self.id] = self;
    }
    
  
    Employee.loadJSON = function() {
      if(Object.keys(empList).length === 0){
        return $http.get('employees.json')
        .then(function(res){
          return $q.all(
            res.data.map(function(empJson){
              return new Employee(empJson);
            })
          );
        })
      }
      else {
        return Employee.getAllEmployees();
      }
    };
    
    Employee.getAllEmployees = function() {
      var array = [];
      angular.forEach(empList, function(emp){
        array.push(emp);
      })
      return $q.when(array);
    };
    
    Employee.remove = function(emp){
      console.log(emp, empList);
      delete empList[emp.id];
    }
 
    return Employee;
  });
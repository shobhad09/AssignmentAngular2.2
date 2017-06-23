var Employee = (function () {
    function Employee(code, salary) {
        this.empname = code;
        this.empsalary = salary;
    }
    Employee.prototype.display = function () {
        console.log('name is' + "" + this.empname);
        console.log('salary is' + "" + this.empsalary);
    };
    return Employee;
}());
var emp = new Employee('shobha', 1001);
emp.display();

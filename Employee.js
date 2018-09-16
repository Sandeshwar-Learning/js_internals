function Employee(id, name, salary) {
    // local to function
    let temp = "This variable will get destroyed as soon as the function is finished executing";

    // instance members (will be available in the instance)
    this.id = id;
    this.name = name;
    this.salary = salary;

    // each object will have a copy of this function
    this.print = () => {
        console.log(`(${this.id}) Name: ${this.name}, Salary: ${this.salary}`)
    }
    
    // static member (will be stored in the function object)
    if(!Employee.totalEmployees) {
        Employee.totalEmployees = 0;
    }
    Employee.totalEmployees++;    
}

// base member (will be stored in the functions prototype object)
Employee.prototype.baseHra = 5000;

// to create a shared function across all the objects
Employee.prototype.show = function() {
    console.log(`(${this.id}) Name: ${this.name}, Salary: ${this.salary}`)
}

let vinod = new Employee(1, "Vinod Gounder", 21000);
let rakesh = new Employee(2, "Rakesh Gomes", 18000);

vinod.print();
rakesh.print();

//console.log("Total Employees: ", Employee.totalEmployees);
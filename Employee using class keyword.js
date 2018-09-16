class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    print() {
        console.log(`(${this.id}) Name: ${this.name}, Salary: ${this.salary}`)
    }
}

var riya = new Employee(1, "Riya Sharma", 12000);
let abhishek = new Employee(2, "Abhishek Jain", 17000);


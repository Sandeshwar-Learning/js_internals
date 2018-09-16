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

// var riya = new Employee(1, "Riya Sharma", 12000);
// let abhishek = new Employee(2, "Abhishek Jain", 17000);

class Manager extends Employee {
    constructor(id, name, salary, perks) {
        super(id, name, salary);
        this.perks = perks;
    }

    print() {
        super.print()
        console.log("Perks: ", this.perks);
    }
}

let kartik = new Manager(3, "Kartik Deshpande", 30000, ["Car", "Stay"]);
kartik.print();
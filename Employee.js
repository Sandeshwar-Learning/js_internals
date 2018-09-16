function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.print = () => {
        console.log(`(${this.id}) Name: ${this.name}, Salary: ${this.salary}`)
    }
}

let vinod = new Employee(1, "Vinod Gounder", 21000);
let rakesh = new Employee(2, "Rakesh Gomes", 18000);

vinod.print();
rakesh.print();
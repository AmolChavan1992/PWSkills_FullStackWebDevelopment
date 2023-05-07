class Employee {
    name;
    position;
    salary;

    constructor(n, p, s) {
        this.name = n;
        this.position = p;
        this.salary = s;
    }

    getSalary() {
        return this.salary;
    }
}

const employee = new Employee('Amol', 'Programmer', 80000);
console.log(employee.getSalary());
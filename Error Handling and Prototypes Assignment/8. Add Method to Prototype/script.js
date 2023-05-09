class Student {
    name;

    constructor(n) {
        this.name = n;
    }
};

Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const student = new Student("Mithun");
student.printDetails();
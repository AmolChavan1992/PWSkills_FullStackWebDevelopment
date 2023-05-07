function getPerson(person) {
    try {
        if(person.name == undefined || person.age == undefined) {
            throw new error;
        }
        return "Name: " + person.name + ", Age: " + person.age;
    } catch (error) {
        return 'Invalid parameter type';
    }
}

console.log(getPerson({name: "Mithun", age: 20}));
console.log(getPerson({name: "Mithun"}));
console.log(getPerson(["name", "Mithun"]));
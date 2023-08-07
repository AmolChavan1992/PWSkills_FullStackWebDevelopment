// Symbol
const k1 = Symbol("Sample1")
const k2 = Symbol("Sample2")

const obj = {
    [k1] : "Amol",
    [k2] : "Chavan"
}

console.log(obj);
console.log(obj[k1]);

// Object
const obj1 = {
    name: "Amol",
    email: "chavanaamol111213@gmail.com",
}

// Stop updation of object
Object.freeze(obj1)

// update old properies
obj1.name = "New AMol"

console.log(obj1);
console.log(Object.keys(obj1));
console.log(...Object.keys(obj1));
console.log(...Object.keys(obj1).toString());
console.log(...Object.keys(obj1).toString().toUpperCase());
function ageInDays(person, exec) {
    let fullName = person.first_name.concat(' ', person.last_name);
    let ageInDays = person.age * 365;
    display(fullName, ageInDays);
}

function display(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
}


const person = {
    first_name: "Amol",
    last_name: "Chavan",
    age: 31
};

ageInDays(person, display)
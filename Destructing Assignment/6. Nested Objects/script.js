const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
}

console.log(fetch_specific_properties(person));

function fetch_specific_properties(params) {
    return { name: params.name, street: params.address.street };
}
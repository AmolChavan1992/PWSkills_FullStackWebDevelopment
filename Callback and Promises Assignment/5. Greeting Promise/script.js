const promise1 = Promise.resolve("Mithun");

promise1.then((value) => {
    console.log(`Hello, ${value}!`);
});
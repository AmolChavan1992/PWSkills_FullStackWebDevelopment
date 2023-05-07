class Test {
    name;
    price;
    #rating;

    get getter() {
        return this.name;
    }
    set setter(n) {
        this.name = n;
    }

    constructor() {
        const arr = [...arguments];
        this.name =  arr[0];
        this.price =  arr[1];
        this.#rating =  arr[2];
    }

    display() {
        console.log("Hello-", this.name, this.price, this.#rating);
    }
}

const t = new Test('test', 1, 2);
console.log(t);
t.setter = "Amol";
console.log(t);
t.getter;
t.display();
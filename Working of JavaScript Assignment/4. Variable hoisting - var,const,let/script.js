function variableHoistingDemonstrate() {
    console.log(a);
    console.log(b);
    console.log(c);

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(variableHoistingDemonstrate());
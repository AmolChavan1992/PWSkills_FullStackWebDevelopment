/*
HOF -> method f
Callback -> method fn
*/
function f(x, y, exec) {
    console.log(`Addition of ${x} and ${y} is ${x+y}`);
    exec();
}

function fn() {
    console.log("Program end.");
}

f(10, 5, fn);
/*
*** Program doesn't wait for timer
Start
End
Timer end
*/
console.log("Start");
setTimeout(function f() {
    console.log("Timer end");
}, 5000);
console.log("End");
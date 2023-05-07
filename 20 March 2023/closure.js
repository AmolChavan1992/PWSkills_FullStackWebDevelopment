function superFunc() {
    let val1 = 1;
    innerFunc();
    function innerFunc() {
        console.log(val1);
    }
}

superFunc();
function mediator(num_generator_delay) {
    num = (num_generator_delay / 1000);
    const id = setInterval(function() {
        console.log("Remaining Time: " + num-- + " Sec");
        if(num == 0) {
            console.log("Random number: " + Math.random());
            clearInterval(id)
        }
    }, 1000);    
}


num_generator_delay = 3000;
mediator(num_generator_delay);
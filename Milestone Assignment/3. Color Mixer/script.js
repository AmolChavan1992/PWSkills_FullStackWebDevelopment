function check_color(color1, color2) {
    switch(true) {
        case (color1 == 'red' && color2 == 'blue'):
            console.log("purple");
            break;
        case (color1 == 'red' && color2 == 'yellow'):
            console.log("orange");
            break;
        case (color1 == 'blue' && color2 == 'yellow'):
            console.log("green");
            break;
        default:
            console.log("Invalid color combination");
    }
}

let color1 = 'red';
let color2 = 'blue';
check_color(color1, color2);
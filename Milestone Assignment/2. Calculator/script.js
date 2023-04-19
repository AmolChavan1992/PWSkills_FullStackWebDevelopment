function doOperation(num1, num2, operator) {
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
    }
}

let num1 = 100;
let num2 = 20;
let operator = '+';
let result = 0;

doOperation(num1, num2, operator);
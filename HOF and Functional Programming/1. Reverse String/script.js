function reverse_string(input) {
    console.log(input.split('').reverse().join(''));
}

const input = "Sample";
setTimeout(() => {
    reverse_string(input)
    }, 2000);
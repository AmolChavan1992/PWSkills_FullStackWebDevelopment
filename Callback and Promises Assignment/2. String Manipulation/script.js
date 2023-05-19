function manipulateString(str, logString) {
    str = str.toUpperCase();
    logString(str);
}

function logString(str) {
    console.log(`The manipulated string is: ${ str }`);
}

manipulateString("hello, world!", logString);
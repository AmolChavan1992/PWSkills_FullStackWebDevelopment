function convertToNumber(str) {
    let data = parseInt(str);
    if(isNaN(data)) {
        return "Invalid number";
    }
    return data;
};

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));
function hof(arr, exec) {
    return exec(arr);
}

function double_data(arr) {
    let newarr = [];
    for(let i = 0;i <arr.length;i++) {
        newarr.push(arr[i] * 2)
    }
    return newarr;
}

let arr = [2, 7, 4, 3];
console.log(hof(arr, double_data));
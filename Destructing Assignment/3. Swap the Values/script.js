x = 10;
y = 5;
console.log(swap_values(x, y));

function swap_values() {
    arr = [...arguments];
    arr[0] = arr[0] + arr[1];
    arr[1] = arr[0] - arr[1];
    arr[0] = arr[0] - arr[1]
    return arr;
}
const arr = [4, 9, 3, 1, 15, 7, 12, 21];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        continue;
    }
    if(arr[i] % 3 == 0) {
        console.log(arr[i]);
    }
}
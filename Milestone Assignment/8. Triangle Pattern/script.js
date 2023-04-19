let counter = 6;
for(let i = counter; i > 0; i--) {
    let data = '';
    for(let j = 0;j<i;j++) {
        data = data + '*';
    }
    console.log(data);
}
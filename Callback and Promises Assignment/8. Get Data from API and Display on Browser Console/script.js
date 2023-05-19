async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
}

getData().then((value) => {
    let counter = 1;
    value.forEach(element => {
        console.log(`[Post-${counter}]`);
        console.log(`User id: ${element.userId}`);
        console.log(`Id: ${element.id}`);
        console.log(`Title: ${element.title}`);
        console.log(`Body: ${element.body}`);
        console.log();
        counter++;
    });
    //console.log(value);
});
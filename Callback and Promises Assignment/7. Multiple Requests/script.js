async function getData() {
    let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data1 = await response1.json();
    let response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data2 = await response2.json();
    let obj = {
        todo: data1,
        post: data2
    };
    return obj;
}

getData().then((value) => {
    console.log(value);
});
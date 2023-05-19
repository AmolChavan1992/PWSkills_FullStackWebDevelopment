async function getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/123456789');
}

getData().then((value) => {
    if(value.ok == false) {
        console.log('Invalid response');
    }
    else {
        let data = value.json();
        console.log(data);
    }
})
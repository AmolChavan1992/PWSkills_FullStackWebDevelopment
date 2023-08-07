/*fetch("https://api.github.com/users/AmolChavan1992/repos")
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});*/


 async function getData() {
    const response =  await fetch('https://api.github.com/users/AmolChavan1992/repos')
    const data = response.json();
    console.log(data);
}

getData();
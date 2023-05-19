function sortBooks(list, exec) {
    lst = list.map(t => t.title);
    display(lst);
}

function display(list) {
    console.log(list.sort());
}


const list = [
    { title:"Origin", author:"Dan Brown", year:2015 },
    { title:"Grey", author:"E.L.James", year:2015 },
    { title:"Fifty Shades Of Grey", author:"E.L.James", year:2011 },
    { title:"Me Before You", author:"Jojo Moyes", year:2012 }
];

sortBooks(list, display);
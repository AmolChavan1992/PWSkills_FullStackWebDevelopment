list = [
    { book_name : "book1", author : "author1", publication_year : 2005 },
    { book_name : "book2", author : "author2", publication_year : 2015 },
    { book_name : "book3", author : "author3", publication_year : 2010 },
    { book_name : "book4", author : "author4", publication_year : 2007 },
];

console.log(list.filter(get_book_details));

function get_book_details(item) {
    if(item.publication_year < 2010) {
        item.author = item.author.charAt(0).toUpperCase() + item.author.slice(1);
        return item;
    }
}
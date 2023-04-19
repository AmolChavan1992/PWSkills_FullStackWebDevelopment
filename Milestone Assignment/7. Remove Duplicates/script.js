function remove_duplicates(cart_items) {
    return cart_items.filter((element, index) => cart_items.indexOf(element) === index);
}



const cart_items = ['Apple', 'Mango', 'Apple', 'Pineapple'];
console.log(remove_duplicates(cart_items));
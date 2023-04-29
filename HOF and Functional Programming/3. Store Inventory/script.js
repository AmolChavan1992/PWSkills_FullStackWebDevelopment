list = [
    { item_name:'Item1', price:1500 },
    { item_name:'Item2', price:1000 },
    { item_name:'Item3', price:2000 },
    { item_name:'Item4', price:500 }
];

console.log(list.map(update_price));

function update_price(item) {
    item.price = (item.price * 80);
    return item;
}
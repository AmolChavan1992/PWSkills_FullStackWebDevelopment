function filterByCategory(products) {
    return function(category) {
        return products.filter((c) => c.category == category);
    }
}

var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
];

var clothingProducts = filterByCategory(products);
console.log(clothingProducts("Clothing"));
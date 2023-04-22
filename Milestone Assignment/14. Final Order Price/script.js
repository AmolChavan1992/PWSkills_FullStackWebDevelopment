total_cost = (cart) => {
    let total_cost = 0;
    for (const item of cart) {
        total_cost += (item[0] * item[1]);
    }
    return total_cost;
};

const cart = [
    [150, 2]
    , [60, 3]
    , [80.5, 1]
    , [225.2, 4]
];

console.log("Total Cost: " + total_cost(cart));
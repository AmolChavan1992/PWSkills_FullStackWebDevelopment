percentage = (original_price, discounted_price) => {
    return (
            (
                (original_price - discounted_price)
                    / original_price
            )*100
        ).toFixed(2);
};

original_price = 300;
discounted_price = 220;
console.log(percentage(original_price, discounted_price));
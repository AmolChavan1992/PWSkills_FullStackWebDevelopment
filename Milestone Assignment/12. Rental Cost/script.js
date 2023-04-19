function calculate_rental_cost(days, car_type) {
    let cost = 0;
    switch(car_type) {
        case 'Economy':
            cost = 4000;
            break;
        case 'Midsize':
            cost = 10000;
            break;
        case 'Luxury':
            cost = 20000;
            break;
    }
    return cost * days;
}

const days = 5;
const car_type = 'Midsize';
console.log(calculate_rental_cost(days, car_type));
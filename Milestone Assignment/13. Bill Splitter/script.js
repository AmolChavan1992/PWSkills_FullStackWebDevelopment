function bill_splitter(cost_of_each_dish, number_of_people) {
    let total_bill = (cost_of_each_dish * number_of_people);
    let table_bill = new Object();
    table_bill.total_bill = total_bill;
    table_bill.paid_by_each_person = cost_of_each_dish;
    return table_bill;
}

const cost_of_each_dish = 150;
const number_of_people = 5;
console.log(bill_splitter(cost_of_each_dish, number_of_people));
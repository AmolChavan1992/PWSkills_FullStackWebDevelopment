user_account_details = (category, amount, user_details) => {
    if(category == 'withdraw') {
        user_details.balance -= amount;
    }
    else {
        user_details.balance += amount;
    }
    return user_details;
};

user_details = {
    uname : 'Amol',
    balance : 20000
};

const category = 'withdraw';
const amount = 500;
console.log(user_account_details(category, amount, user_details));
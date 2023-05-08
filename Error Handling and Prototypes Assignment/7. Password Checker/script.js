class User {
    username;
    password;

    constructor(n, p) {
        this.username = n;
        this.setPassword = p;
    }

    set setPassword(value) {
        const regex_data = /(?=.*?[0-9])(?=.*?[A-Z]).{8,}/;
        if(regex_data.test(value)) {
            this.password = value;
        }
        else {
            console.log("Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }

    get getPassword() {
        return this.password.replace(/./g, '*');
    }
}

const user = new User("Mithun", "Password123");
console.log(user.getPassword);

user.setPassword = "myPassword";

user.setPassword = "Mypassword123";
console.log(user.getPassword);
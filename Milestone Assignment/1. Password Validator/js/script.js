const pass = document.getElementById("password_field");
const repass = document.getElementById("re_password_field");
const btn = document.getElementById("btn_validate");

function validate_password() {
    let pwd = pass.value;
    let repwd = repass.value;

    if(pwd === repwd) {
        console.log("Password Matched. Password validation Successful.");
    }
    else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}


btn.addEventListener("click", validate_password);
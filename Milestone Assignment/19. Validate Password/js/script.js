data_submit = document.getElementById("data_submit");
email_data = document.getElementById("email_address");
password_data = document.getElementById("password_field");
result_data = document.getElementById("result");

function validate_data() {
    let email_address = email_data.innerText;
    let password_text = password_data.value;

    if((password_text.length < 8) || (email_data.value.includes("@") == false)) {
        result_data.innerText = 'Invalid email or password!';
        result_data.style.color = "red";
        return false;
    }
    else {
        result_data.innerText = 'Valid email or password!';
        result_data.style.color = "green";
    }
}

data_submit.addEventListener("click", validate_data);
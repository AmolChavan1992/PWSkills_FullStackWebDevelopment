change_text_button = document.getElementById("change_text");
text_data = document.getElementById("data");


function change_text_data() {
    if(text_data.innerText == "The most affordable learning platform") {
        text_data.innerText = "PW Skills";
    }
    else {
        text_data.innerText = "The most affordable learning platform";
    }
}


change_text_button.addEventListener("click", change_text_data);
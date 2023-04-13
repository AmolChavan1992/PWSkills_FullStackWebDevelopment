const clickMe = document.getElementById("clickme");

function displayMessage() {
    alert("Button clicked");
}

clickMe.addEventListener("click", displayMessage)
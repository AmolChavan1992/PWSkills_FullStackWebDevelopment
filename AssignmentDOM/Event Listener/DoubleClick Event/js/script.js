const clickMe = document.getElementById("doubleclickme");

function displayMessage() {
    alert("Button double clicked");
}

clickMe.addEventListener("dblclick", displayMessage)
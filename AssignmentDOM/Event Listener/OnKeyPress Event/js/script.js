const inputText = document.getElementById("inputData");

function displayMessage() {
    alert("Key pressed");
}

inputText.addEventListener("keypress", displayMessage)
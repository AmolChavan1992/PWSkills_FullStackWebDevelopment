const show = document.getElementById("showMessage");

function displayMessage() {
    alert("Mouse Out");
}

show.addEventListener("mouseout", displayMessage)
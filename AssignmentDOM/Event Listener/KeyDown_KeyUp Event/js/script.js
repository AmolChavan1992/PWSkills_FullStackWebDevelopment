const changeColor = document.getElementById("changeColor");

function keyDownEvent() {
    document.body.style.backgroundColor = "blue";
}

function keyUpEvent() {
    document.body.style.backgroundColor = "white";
}

changeColor.addEventListener("keydown", keyDownEvent);
changeColor.addEventListener("keyup", keyUpEvent);
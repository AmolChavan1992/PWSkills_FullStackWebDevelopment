rect = document.getElementById("rect");
rect.style.position = 'relative';
rect.style.top = '0px';
rect.style.left = '0px';

document.addEventListener("keydown", (e) => {
    e = e || window.event;

    switch(e.keyCode) {
        case 37:
            // left
            rect.style.left = parseInt(rect.style.left) - 5 + "px";
            break;
        case 38:
            // up
            rect.style.top = parseInt(rect.style.top) - 5 + "px";
            break;
        case 39:
            // right
            rect.style.left = parseInt(rect.style.left) + 5 + "px";
            break;
        case 40:
            // down
            rect.style.top = parseInt(rect.style.top) + 5 + "px";
            break;
    }
});
color_change = document.getElementById("change_color");

colors = [
    'red',
    'green',
    'blue',
    'pink',
    'lime',
    'aqua',
    'yellow',
    'chocolate'
]

function change_page_color() {
    num = Math.round(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[num];
};

color_change.addEventListener("click", change_page_color);
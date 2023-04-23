item_text = document.getElementById("item_text");
button_clk = document.getElementById("add_item");
todo_panel = document.getElementById("right_panel");

function addTODO() {
    node = document.createElement("div");
    node.className = "rows";
    
    // checkbox
    chk = document.createElement("input");
    chk.type = 'checkbox';

    // label
    lbl = document.createElement("p");
    lbl.appendChild(document.createTextNode(item_text.value));

    node.appendChild(chk);
    node.appendChild(lbl);

    todo_panel.appendChild(node);
}

button_clk.addEventListener("click", addTODO);
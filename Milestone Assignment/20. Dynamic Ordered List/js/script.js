button_item = document.getElementById("add_item");
order_list = document.getElementById("list");
const arr = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
];
let l = 0;

function update_list() {
    l = order_list.getElementsByTagName("li").length;
    if(l < arr.length == false) {
        alert('All items have been added');
        return;
    }
    node = document.createElement('li');
    node.appendChild(document.createTextNode(arr[l]));
    order_list.appendChild(node);
}

button_item.addEventListener("click", update_list);
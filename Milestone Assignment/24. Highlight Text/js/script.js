text_data = document.getElementById("data");

update_text();

function update_text() {
    arr = new Array();
    str = text_data.innerHTML;
    word = '';
    start = 0;
    for(let i = 0; i < str.length; i++) {
        if(word == '') {
            start = i;
        }
        if(str[i] == ' ' || str[i] == ',' || str[i] == '.') {
            if(word.length > 8) {
                arr.push(word);
            }
            word = '';
            start = 0;
            continue;
        }
        word += str[i];
    }

    for(let i = 0; i < arr.length; i++) {
        new_word = '<span>' + arr[i] + '</span>';
        str = str.replace(arr[i], new_word);
    }
    text_data.innerHTML = str;
}
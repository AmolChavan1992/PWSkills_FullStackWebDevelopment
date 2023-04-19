function vowel_count(user_name) {
    let count = 0;

    for(let i=0; i < user_name.length; i++) {
        switch(user_name.charAt(i).toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
            break;
        }
    }

    return count;
}

const user_name = 'Sample name';
console.log(vowel_count(user_name));
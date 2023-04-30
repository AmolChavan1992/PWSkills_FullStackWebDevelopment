console.log(fetch_random_elements(1,2,3,4,5,6,7,8,9));

function fetch_random_elements() {
    return [...arguments].filter((element, index) => (index == 0 || index == 1 || index == arguments.length - 1));
}
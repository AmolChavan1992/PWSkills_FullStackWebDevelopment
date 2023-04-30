console.log(get_max_min(5,2,7,1,9));

function get_max_min(params) {
    return { max: Math.max(...arguments), min: Math.min(...arguments) };
}
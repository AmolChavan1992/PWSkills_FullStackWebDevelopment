function find_highest_marks(marks) {
    let max_num = marks[0];
    marks.forEach(element => {
        max_num = (max_num < element)?element:max_num;
    });
    console.log(max_num);
}


const marks = [462, 520, 310, 590, 470, 550];
find_highest_marks(marks);
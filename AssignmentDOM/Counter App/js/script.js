const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const resultData = document.getElementById("result");

const incrementValue = () => {
    let num = parseInt(resultData.innerHTML);
    return num + 1;
};

const decrementValue = () => {
    let num = parseInt(resultData.innerHTML);
    return num - 1;
};

function incrementData() {
    resultData.innerText = incrementValue();
}

function decrementData() {
    resultData.innerText = decrementValue();
}

function resetData() {
    resultData.innerText = 0;
}

if(incrementButton != null) {
    incrementButton.addEventListener("click", incrementData);
}

if(decrementButton != null) {
    decrementButton.addEventListener("click", decrementData);
}

if(resetButton != null) {
    resetButton.addEventListener("click", resetData);
}

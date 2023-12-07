const inputElement = document.getElementById("text1");

function display(x) {
    inputElement.value += x;
}

function compute() {
    var x = inputElement.value;
    inputElement.value = eval(x);
}

function reset() {
    inputElement.value = "0";
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
        compute();
    }
});
const display = document.getElementById("display");
const history = document.getElementById("history");

function pressKey(value) {
    display.value += value;
}

function pressOperator(operator) {
    display.value += " " + operator + " ";
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value.replace(/ /g, ""));
        history.innerHTML += `<div>${display.value} = ${result}</div>`;
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}

function pressAdvanced(func) {
    try {
        let result;
        const value = parseFloat(display.value);
        if (func === "sqrt") result = Math.sqrt(value);

        history.innerHTML += `<div>${func}(${display.value}) = ${result}</div>`;
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

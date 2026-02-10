let display = document.getElementById("display");
let current = "";
let operator = "";
let previous = "";

function updateDisplay(value) {
  display.textContent = value;
}

function addNumber(num) {
  current += num;
  updateDisplay(current);
}

function addDot() {
  if (!current.includes(".")) {
    current += ".";
    updateDisplay(current);
  }
}

function setOperator(op) {
  if (current === "") return;
  operator = op;
  previous = current;
  current = "";
}

function calculate() {
  if (current === "" || previous === "") return;

  let result;
  let a = parseFloat(previous);
  let b = parseFloat(current);

  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") result = a / b;

  updateDisplay(result);
  current = result.toString();
  previous = "";
}

function clearAll() {
  current = "";
  previous = "";
  operator = "";
  updateDisplay("0");
}

function toggleSign() {
  if (current === "") return;
  current = (parseFloat(current) * -1).toString();
  updateDisplay(current);
}

function percent() {
  if (current === "") return;
  current = (parseFloat(current) / 100).toString();
  updateDisplay(current);
}
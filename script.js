let firstNumber = "";
let secondNumber = "";
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

// Update display
function updateDisplay(value) {
  display.textContent = value;
}

// Add number
function appendNumber(number) {
  if (display.textContent === "0" || shouldResetDisplay) {
    display.textContent = number;
    shouldResetDisplay = false;
  } else {
    display.textContent += number;
  }
}

// Decimal
function appendDecimal() {
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}

// Operator
function setOperator(op) {
  if (operator !== null) calculate();
  firstNumber = display.textContent;
  operator = op;
  shouldResetDisplay = true;
}

// Calculate
function calculate() {
  if (operator === null) return;

  secondNumber = display.textContent;

  let result = operate(operator, firstNumber, secondNumber);

  if (typeof result === "number") {
    result = Math.round(result * 1000) / 1000;
  }

  updateDisplay(result);
  operator = null;
}

// Clear
function clearAll() {
  firstNumber = "";
  secondNumber = "";
  operator = null;
  updateDisplay("0");
}

// Backspace
function backspace() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

// Math functions
function operate(op, a, b) {
  a = Number(a);
  b = Number(b);

  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) return "😏 No dividing by 0";
    return a / b;
  }
}
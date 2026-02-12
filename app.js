const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentExpression = '';
let shouldResetDisplay = false;

function updateDisplay(value) {
  display.textContent = value || '0';
}

function clearCalculator() {
  currentExpression = '';
  updateDisplay('0');
}

function appendValue(value) {
  if (shouldResetDisplay) {
    currentExpression = '';
    shouldResetDisplay = false;
  }

  currentExpression += value;
  updateDisplay(currentExpression);
}

function calculateResult() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay(currentExpression);
    shouldResetDisplay = true;
  } catch {
    updateDisplay('Error');
    currentExpression = '';
  }
}


function toggleSign() {
  if (!currentExpression) return;

  currentExpression = (eval(currentExpression) * -1).toString();
  updateDisplay(currentExpression);
}


function applyPercent() {
  if (!currentExpression) return;

  currentExpression = (eval(currentExpression) / 100).toString();
  updateDisplay(currentExpression);
}

function handleButtonClick(value) {
  switch (value) {
    case 'AC':
      clearCalculator();
      break;

    case '=':
      calculateResult();
      break;

    case '+/-':
      toggleSign();
      break;

    case '%':
      applyPercent();
      break;

    default:
      appendValue(value);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtonClick(button.dataset.value);
  });
});

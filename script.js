let currentNumber = '0';
let previousNumber = '';
let operator = '';
let shouldResetDisplay = false;

const resultDisplay = document.getElementById('result');

function updateDisplay() {
    resultDisplay.textContent = currentNumber;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentNumber = '';
        shouldResetDisplay = false;
    }

    if (number === '.' && currentNumber.includes('.')) return;
    if (currentNumber === '0' && number !== '.') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== '' && !shouldResetDisplay) {
        calculate();
    }
    previousNumber = currentNumber;
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operator === '' || shouldResetDisplay) return;

    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay();
}
let result = document.getElementById('field1');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let history = [];

// Adiciona número ao display
function writeNumber(element) {
    const number = element.innerText;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

// Define operador
function setOperator(element) {
    const operator = element.innerText;
    currentOperand = currentOperand.toString() + ' ' + operator + ' ';
    updateDisplay();
}

// Limpa o display
function cleartxt() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Calcula o resultado
function calculate() {
    try {
        const computation = eval(currentOperand);
        history.push(currentOperand + ' = ' + computation);
        currentOperand = computation.toString();
        updateDisplay();
    } catch (error) {
        currentOperand = 'Erro';
        updateDisplay();
    }
}

// Atualiza o display
function updateDisplay() {
    result.value = currentOperand;
}

// Mostra o easter egg
function showEasterEgg() {
    currentOperand = 'ENVOLTI';
    updateDisplay();
}

// Mostra o histórico
function showHistory() {
    const historyContainer = document.getElementById('history-container');
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        historyList.appendChild(li);
    });
    historyContainer.classList.toggle('hidden');
}
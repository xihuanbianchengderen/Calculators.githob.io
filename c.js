function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('^', '**'));
    } catch {
        display.value = 'Error';
    }
}

function calculateSquare() {
    const display = document.getElementById('display');
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch {
        display.value = 'Error';
    }
}

function calculateCube() {
    const display = document.getElementById('display');
    try {
        display.value = Math.pow(eval(display.value), 3);
    } catch {
        display.value = 'Error';
    }
}
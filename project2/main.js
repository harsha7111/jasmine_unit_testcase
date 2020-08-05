function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);
    const number1 = parseInt(numbers[0]);
    const number2 = parseInt(numbers[1]);
    const operation = inputValue.match(expression);

    if(Number.isNaN(number1) || Number.isNaN(number2) || operation === null) {
      updateResult('Operation not recognized');
      return;
    }
    const calculator = new Calculator();
    calculator.add(number1);

    let result;
    switch (operation[0]) {
        case '+':
            result = calculator.add(number2)
            break;
        case '-':
            result = calculator.subtract(number2)
            break;
        case '*':
            result = calculator.multiply(number2)
            break;
        case '/':
            result = calculator.divide(number2)
            break;
    }
    updateResult(result);
}

function updateResult(result) {
    let element = document.getElementById('result');
    if(element)
      element.innerText = result;
}

function showVersion() {
    const calculator = new Calculator;
    let element = document.getElementById('version');
    element.innerText = calculator.version;

    // calculator.version.then(function(version){
    //     element.innerText = version;
    // });
}
function calculator(a, b, symbol) {

    switch (symbol) {
        case "+": {
            console.log(add(a, b));
        }
            break;
        case "-": {
            console.log(substract(a, b));
        }
            break;
        case "*": {
            console.log(multiply(a, b));
        }
            break;
        case "/": {
            console.log(divide(a, b));
        }
            break;
    }
    function add(a, b) {return a + b};
    function substract(a, b) {return a - b};
    function multiply(a, b) {return a * b};
    function divide(a, b) {return a / b};
}


calculator(2, 4, '+');
calculator(3, 3, '/');
calculator(18, -1, '*');

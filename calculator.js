function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    switch (operator.toLowerCase()) {
        case 'add':
            result = add(num1, num2)
            break;
        case 'subtract':
            result = subtract(num1, num2)
            break;
        case 'multiply':
            result = multiply(num1, num2)
            break;
        case 'divide':
            result = divide(num1, num2)
            break;
    }
    return result
}

// I may need seperate functions depending on the button
// AKA one for numbers, one for operators, one for equal? (Or group = with operator)
function updateDisplayAndReturnVar(variable) {
    // If the variable is "Clear", set the p element to have no text
    // If is =, then call operate? How will I get the input args here?
    // Else, add the variable to the p element
    let display = document.querySelector('.display');
    if (variable === 'Clear') {
        display.textContent = '';
    } else if (variable === '=') {
        // Call operate assuming all 3 variables exist
    } else {
        display.textContent += variable;
    }

}

// I need to figure out when does a number start and end and assign to said variables
// and use them as arguments for the functions
let num1, num2, operator;

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Call a seperate function to update display and return value
        updateDisplayAndReturnVar(button.textContent);
    })
})
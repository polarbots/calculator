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

function updateDisplayAndReturnVar(variable) {
    // If the variable is "Clear", set the p element to have no text
    // Else, add the variable to the p element
}

// Need to return the value and also update the display
// Special handling for clicking of clear?
// Instead of update display it would clear it

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Call a seperate function to update display and return value
        console.log(`Clicked button: ${button.innerText}`)
    })
})
let add = (x, y) => x + y
let subtract = (x, y) => x - y
let multiply = (x, y) => x * y
let divide = (x, y) => x / y

let firstNum = ""
let secondNum = ""
let operator = ""
let solution = ""
const buttons = document.querySelectorAll('button')
const display = document.querySelector('.output')

function operate(x, y, operation) {
  x = Number(x)
  y = Number(y)
  if (operation == "+") {
    return add(x, y)
  } else if (operation == "-") {
    return subtract(x, y)
  } else if (operation == "x") {
    return multiply(x, y)
  } else {
    return divide(x, y)
  }
}

function displayValue(firstNum, secondNum, operator) {
  return `${firstNum} ${operator} ${secondNum}`
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {

    // store first value
    if (Number.isInteger(Number(button.innerHTML)) && operator == "") {
      firstNum += button.innerHTML
      display.innerHTML = displayValue(firstNum, secondNum, operator)
    
    // store operator if there is no solution stored
    } else if ( (button.innerHTML == "/" || button.innerHTML == "x" || 
                button.innerHTML == "+" || button.innerHTML == "-") &&
                solution == "" && secondNum == "") {
      operator = button.innerHTML
      display.innerHTML = displayValue(firstNum, secondNum, operator)

    // store second value
    } else if (firstNum != "" && operator != "" && Number.isInteger(Number(button.innerHTML))) {
      secondNum += button.innerHTML
      display.innerHTML = displayValue(firstNum, secondNum, operator)

    // evalutate equation
    } else if (button.innerHTML == "=") {
      if (secondNum == "") {
        return
      } 
      solution = operate(firstNum, secondNum, operator)
      solution = Number(solution.toFixed(2))
      display.innerHTML = displayValue(firstNum, secondNum, operator) + ` = ${solution}`
    

    // evaluate string equation
    } else if ( (button.innerHTML == "/" || button.innerHTML == "x" || 
                button.innerHTML == "+" || button.innerHTML == "-") &&
                solution == "" && secondNum != "") {
      firstNum = operate(firstNum, secondNum, operator)
      secondNum = ""
      operator = button.innerHTML
      display.innerHTML = displayValue(firstNum, secondNum, operator)
    

    // clear display 
    } else if (button.innerHTML == "C") {
      firstNum = ""
      secondNum = ""
      operator = ""
      display.innerHTML = displayValue(firstNum, secondNum, operator)
    }
  })
})

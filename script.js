let add = (x, y) => x + y
let subtract = (x, y) => x - y
let multiply = (x, y) => x * y
let divide = (x, y) => x / y

let firstNum
let secondNum
let operator

function operate(x, y, operation) {
  if (operation == "+") {
    return add(x, y)
  } else if (operation == "-") {
    return subtract(x, y)
  } else if (operation == "*") {
    return multiply(x, y)
  } else {
    return divide(x, y)
  }
}

function displayValue(firstNum, secondNum, operator) {
  return `${firstNum} ${operator} ${secondNum}`
}

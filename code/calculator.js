export default (function() {
  const add = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") throw new Error('Enter numbers');
    return a + b;
  }

  const subtract = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") throw new Error('Enter numbers');
    return a - b;
  }

  const multiply = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") throw new Error('Enter numbers');
    return a * b;
  }

  const divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") throw new Error('Enter numbers');
    if (b === 0) throw new Error('Cannot divide by 0');
    return a / b;
  }


  return { add, subtract, multiply, divide }
})()
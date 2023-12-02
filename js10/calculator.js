document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display input');
    let firstOperand = '';
    let operator = '';
    let memory = 0;
  
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', function() {
        const value = this.value;
  
        if (!isNaN(value) || value === '.') {
          display.value += value;
        } else if (value === 'C') {
          display.value = '';
        } else if (value === '=') {
          const secondOperand = display.value;
          if (firstOperand !== '' && secondOperand !== '') {
            const result = calculate(firstOperand, operator, secondOperand);
            display.value = result;
            firstOperand = result;
            operator = '';
          }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
          if (firstOperand === '') {
            firstOperand = display.value;
            operator = value;
            display.value = '';
          }
        } else if (value === 'm+') {
          memory += parseFloat(display.value);
          display.value = 'm';
        } else if (value === 'm-') {
          memory -= parseFloat(display.value);
          display.value = 'm';
        } else if (value === 'mrc') {
          display.value = memory;
          memory = 0;
        }
      });
    });
  
    function calculate(firstOperand, operator, secondOperand) {
      firstOperand = parseFloat(firstOperand);
      secondOperand = parseFloat(secondOperand);
  
      switch (operator) {
        case '+':
          return (firstOperand + secondOperand).toString();
        case '-':
          return (firstOperand - secondOperand).toString();
        case '*':
          return (firstOperand * secondOperand).toString();
        case '/':
          if (secondOperand !== 0) {
            return (firstOperand / secondOperand).toString();
          } else {
            return 'Error: Division by zero';
          }
        default:
          return '';
      }
    }
  });

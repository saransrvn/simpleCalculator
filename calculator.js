
// getting the previous calculated answer or to start with new one   
let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

// updating in DOM 
function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}
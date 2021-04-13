//grab elements via the DOM
const outputNumber = document.querySelector('.output');
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');

//add a function for the decrease button functionality 
function decrease(){
  let currentNumber = document.querySelector('.output').innerHTML; 
  outputNumber.innerHTML = currentNumber - 1;
}

//add a function for the increase button functionality 
function increase(){
  let toNumber = parseInt(outputNumber.innerHTML);
  outputNumber.innerHTML = toNumber + 1;
}

//add a function for the reset button functionality 
function reset(){
  outputNumber.innerHTML = 0; 
}

//add a function that displays the outputNumber with color change if/else
function colorChange(){
  let currentNumber = outputNumber.innerHTML;
  if(currentNumber == 0){
    outputNumber.style.color = "black";
  } else if(currentNumber > 0){
    outputNumber.style.color = "green";
  } else if(currentNumber < 0){
    outputNumber.style.color = "red";
  }
}

// addEventListeners for the buttons
decreaseBtn.addEventListener('click', decrease);
increaseBtn.addEventListener('click', increase);
resetBtn.addEventListener('click', reset);

decreaseBtn.addEventListener('click', colorChange);
increaseBtn.addEventListener('click', colorChange);
resetBtn.addEventListener('click', colorChange);
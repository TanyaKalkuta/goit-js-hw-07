
let counterValue = 0;

function increment() { 
  counterValue++;
  console.log(counterValue);
}

function decrement() { 
  counterValue--; 
   console.log(counterValue);
}


const spanRef = document.querySelector('#value');


const incrementBtn=document.querySelector('button[data-action="increment"]');


incrementBtn.addEventListener('click', () => {
  increment();
  spanRef.textContent = counterValue;
});


 const decrementBtn=document.querySelector('button[data-action="decrement"]');
 

decrementBtn.addEventListener('click',  () => {
  decrement();
  spanRef.textContent = counterValue;
});
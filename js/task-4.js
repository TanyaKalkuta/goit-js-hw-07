
let counterValue = 0;

function increment() { 
  counterValue+=1;
  console.log(counterValue);
}

function decrement() { 
  counterValue-=1; 
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

const counterContainer = document.querySelector('#counter');
counterContainer.classList.add('counter-container');
spanRef.classList.add('span-counter')
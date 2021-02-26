const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


inputRef.addEventListener('input', onInputRange);


function onInputRange(event) {
   // console.log(event.currentTarget.value);
    console.log(inputRef.value);
    spanRef.style.fontSize = `${inputRef.value}px`;
    
}


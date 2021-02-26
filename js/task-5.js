const refs = {
    nameLable : document.querySelector('#name-output'),
    input : document.querySelector('#name-input')
};

console.log(refs.input);

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    //event.preventDefolt();
    console.log(event.currentTarget.value);
    
   refs.input.value === ''
        ? refs.nameLable.textContent = 'незнакомец'
        : refs.nameLable.textContent = refs.input.value; 
} 
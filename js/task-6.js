const inputRef = document.querySelector('#validation-input')

console.log(inputRef);

inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('focus', onInputFocus);

function onInputBlur() {
console.log(inputRef.value.length);
inputRef.value.length === Number(inputRef.getAttribute('data-length'))
? inputRef.classList.add('valid')
: inputRef.classList.add('invalid');
}

function onInputFocus() {
inputRef.classList.remove('valid')
inputRef.classList.remove('invalid')
}
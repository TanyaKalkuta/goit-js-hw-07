
const divControl = document.querySelector('#controls');
const inputNunb = divControl.querySelector('input');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');

console.log(inputNunb);
 

btnRender.addEventListener('click', e=>createBoxes(inputNunb.value));

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    divBoxes.innerHTML ='';
    // boxes.remove();//удаляет весь div;
};

function createBoxes() {
    console.log(inputNunb.value);
    
    let width = 20;
    let height = 20;
  
        for (let i = 1; i <= inputNunb.value; i += 1) {
            //console.log(i);
            width += 10;
            height += 10;
            const box = document.createElement('div');
            box.style.width = `${width}px`;
            box.style.height = `${height}px`;
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
            
            divBoxes.append(box);
        }
    
    }

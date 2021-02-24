const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector("#ingredients");


const listIngredientsRef = ingredients.map (ingredient => {
    const itemIingredients = document.createElement('li');
    itemIingredients.textContent = ingredient;
    return itemIingredients;
    
});

//console.log(listIngredientsRef);
//добавим название списку(нет в задании):

ingredientsRef.append(...listIngredientsRef);

const title = document.createElement("h2");
title.textContent = "Список ингридиентов";
ingredientsRef.before(title);
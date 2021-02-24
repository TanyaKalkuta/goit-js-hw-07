const categoriesItemRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesItemRef.length} категории.`);


[...categoriesItemRef].forEach(item => {
    console.log('Категория:', item.firstElementChild.textContent);
    const itemsOfCateoriesRef = item.querySelectorAll('li');
    console.log(`Количество элементов: ${itemsOfCateoriesRef.length}`);
    
});
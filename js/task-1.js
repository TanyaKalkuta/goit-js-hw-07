const countOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories:`, countOfCategories.length);

console.log(countOfCategories);

countOfCategories.forEach((item) => {
  const headOfCategories = item.querySelector("h2").textContent;
  console.log(`Category:`, headOfCategories);
  const listOfCategories = item.querySelectorAll("ul li").length;
  console.log(`Elenents:`, listOfCategories);
});

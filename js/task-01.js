const allCategory = document.querySelector("#categories");

const itemsOfCategories = allCategory.querySelectorAll(".item");
console.log(`Number of categories: ${itemsOfCategories.length}`);

itemsOfCategories.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const amountOfElements = item.querySelectorAll("li");

  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${amountOfElements.length}`);
});

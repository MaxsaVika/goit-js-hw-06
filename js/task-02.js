const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const makeIngredientsItem = (ingredients) => {
  return ingredients.map((item) => {
    const ingredient = document.createElement("li");
    ingredient.classList.add("item");
    ingredient.textContent = item;

    return ingredient;
  });
};

const elements = makeIngredientsItem(ingredients);

ingredientsList.append(...elements);

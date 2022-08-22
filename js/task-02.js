const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");

  ingredientsItems.push(li);
}

ingredientsList.append(...ingredientsItems);

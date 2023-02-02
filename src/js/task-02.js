const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const getAllById = document.querySelector("#ingredients");

const liItems = ingredients.map((element) => {
  const listItem = document.createElement("li");
  listItem.className = "item";
  listItem.textContent = element;
  getAllById.append(listItem);
});

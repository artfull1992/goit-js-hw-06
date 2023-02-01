const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const list = document.querySelector('#ingredients');
// console.log(list)


  const liItems = ingredients.map(element => {
    const listItem = document.createElement("li")
    listItem.className = "item"
    listItem.textContent = element
    list.append(listItem)
  });

// console.log(setLiItems(ingredients))
console.log(liItems)

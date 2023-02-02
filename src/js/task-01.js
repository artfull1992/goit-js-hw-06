const getAllLiItem = document.querySelector("#categories");

const getQuantityItemsByUl = (ulItems) => {
  console.log("Number of categories: ", ulItems.children.length);
};

getQuantityItemsByUl(getAllLiItem);

const getLiAndH2ByLiItems = (liItems) => {
  const liItemsArray = liItems.querySelectorAll(".item");
  for (const element of liItemsArray) {
    console.log("Category: ", element.querySelector("h2").textContent);
    console.log("Elements: ", element.querySelectorAll("li").length);
  }
};

getLiAndH2ByLiItems(getAllLiItem);

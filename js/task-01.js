const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
console.log("Number of categories:", numberOfCategories);

const categoryItems = document.querySelectorAll(".item");

categoryItems.forEach(function (category) {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});

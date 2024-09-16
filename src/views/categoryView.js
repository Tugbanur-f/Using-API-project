export const createCategorySelector = () => {
  const select = document.createElement("select");
  select.id = "categorySelector";
  select.classList.add("category-selector");

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category[0].toUpperCase() + category.slice(1);
    select.appendChild(option);
  });

  return select;
};

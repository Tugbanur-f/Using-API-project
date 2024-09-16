import { fetchNews } from "./fetchNews.js";

export const setupEventListeners = (searchBar, categorySelector) => {
  const button = searchBar.querySelector("#searchButton");
  const input = searchBar.querySelector("#searchInput");
  const newsContainer = document.getElementById("newsContainer");

  const onSearch = () => {
    const query = input.value.trim();
    const category = categorySelector.value;

    newsContainer.innerHTML = "";
    fetchNews(query, category);
  };

  button.addEventListener("click", onSearch);

  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  });
  setTimeout(() => {
    input.focus();
  }, 0);

  categorySelector.addEventListener("change", () => {
    onSearch();
    input.value = "";
    input.focus();
  });
};

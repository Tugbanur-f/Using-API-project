import { fetchNews } from "./fetchNews.js";

export const setupEventListeners = (searchBar, categorySelector) => {
  const button = searchBar.querySelector("#searchButton");
  const input = searchBar.querySelector("#searchInput");
  const newsContainer = document.getElementById("newsContainer");

  button.addEventListener("click", () => {
    const query = input.value.trim();
    category = categorySelector.value;

    newsContainer.innerHTML = "";

    fetchNews(query, category);
  });

  categorySelector.addEventListener("change", () => {
    const category = categorySelector.value;
    const query = input.value.trim();
    newsContainer.innerHTML = "";

    fetchNews(query, category);

    input.value = "";
    input.focus();
  });
};

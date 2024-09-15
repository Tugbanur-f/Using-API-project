import { fetchNews } from "./fetchNews.js";
import { setupEventListeners } from "./setupEvents.js";
import { createNewsContainer } from "../views/newsView.js";
import { createSearchBar } from "../views/searchBarView.js";
import { createErrorContainer } from "../views/errorView.js";
import { createLoadingIndicator } from "../views/loadingView.js";
import { createCategorySelector } from "../views/categoryView.js";

export const createNewsPage = () => {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = "";

  const onSearch = (query) => {
    const category = categorySelector.value;
    fetchNews(query, category);
  };

  const searchBar = createSearchBar(onSearch);
  const categorySelector = createCategorySelector();
  const loadingIndicator = createLoadingIndicator();
  const errorContainer = createErrorContainer();
  const newsContainer = createNewsContainer();

  appDiv.appendChild(searchBar);
  appDiv.appendChild(categorySelector);
  appDiv.appendChild(loadingIndicator);
  appDiv.appendChild(errorContainer);
  appDiv.appendChild(newsContainer);

  setupEventListeners(searchBar, categorySelector);

  fetchNews();
};

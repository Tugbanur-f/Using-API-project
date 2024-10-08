import { API_KEY, BASE_URL } from "../constants.js";
import { createNewsItems } from "../views/newsView.js";

export const fetchNews = async (q = "", category = "general") => {
  let url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}&category=${category}`;
  if (q) {
    url += `&q=${q}`;
  }

  const loadingIndicator = document.getElementById("loading");
  const errorContainer = document.getElementById("error");
  const newsContainer = document.getElementById("newsContainer");
  const input = document.getElementById("searchInput");

  loadingIndicator.style.display = "block";
  errorContainer.innerHTML = "";
  newsContainer.innerHTML = "";
  input.value = "";
  input.focus();

  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const filteredArticles = data.articles.filter(
      (article) => !article.title.toLowerCase().includes("removed"),
    );

    if (filteredArticles.length === 0) {
      errorContainer.innerText = "No results found.";
    } else {
      filteredArticles.forEach((article) => {
        const newsItem = createNewsItems(article);
        newsContainer.appendChild(newsItem);
      });
    }
  } catch (error) {
    errorContainer.innerText = `Failed to fetch news: ${error.message}`;
  } finally {
    loadingIndicator.style.display = "none";
  }
};

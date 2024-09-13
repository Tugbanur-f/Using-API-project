import { API_KEY, BASE_URL } from '../constants.js';
import {
  createNewsContainer,
  createNewsItem,
} from '../views/newsView.js';
import { createSearchBar } from '../views/searchView.js';
import { createErrorContainer } from '../views/errorView.js';
import { createLoadingIndicator } from '../views/loadingView.js';

 const fetchNews = async (query) => {
    const url = `${BASE_URL}?q=${query}&apiKey=${API_KEY}`;


    const loadingIndicator = document.getElementById('loading');
    const errorContainer = document.getElementById('error');
    const newsContainer = document.getElementById('newsContainer');
   
    loadingIndicator.style.display = 'block';
    errorContainer.innerHTML = '';
    newsContainer.innerHTML = ''; 

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
       const response = await fetch(url);
       if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
       } 
       const data = await response.json();

       const filteredArticles = data.articles.filter(article => !article.title.toLowerCase().includes('removed'));

       if (filteredArticles.length === 0) {
        errorContainer.innerText = 'No results found.';
       } else {
        filteredArticles.forEach(article => {
            const newsItem = createNewsItem(article);
            newsContainer.appendChild(newsItem);
        });
       }
    }catch (error) {
        errorContainer.innerText = 'Failed to fetch news.';
    }finally {
        loadingIndicator.style.display = 'none';
    }
};

export const createNewsPage = () => {
    const appDiv = document.getElementById('app');

    appDiv.innerHTML = '';

    const searchBar = createSearchBar((query) => fetchNews(query));
    appDiv.appendChild(searchBar);

    const loadingIndicator = createLoadingIndicator();
    const errorContainer = createErrorContainer();
    const newsContainer = createNewsContainer();
    appDiv.appendChild(loadingIndicator);
    appDiv.appendChild(errorContainer);
    appDiv.appendChild(newsContainer);
}


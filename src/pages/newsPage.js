import { API_KEY, BASE_URL } from '../constants.js';
import {
  createNewsContainer,
  createNewsItem,
} from '../views/newsView.js';
import { createSearchBar } from '../views/searchView.js';
import { createErrorContainer } from '../views/errorView.js';
import { createLoadingIndicator } from '../views/loadingView.js';
import { createCategorySelector } from '../views/categoryView.js';

const fetchNews = async () => {
    const url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
    
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
    } catch (error) {
        errorContainer.innerText = `Failed to fetch news: ${error.message}`;
    } finally {
        loadingIndicator.style.display = 'none';
    }
};

const setupEventListeners = (searchBar) => {
    const categoryButtons = document.querySelectorAll('.category-button');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            fetchNews('', category); 
        });
    });

    
    searchBar.addEventListener('input', () => {
        const query = searchBar.value;
        fetchNews(query); 
    });
};






export const createNewsPage = () => {
    const appDiv = document.getElementById('app');

    appDiv.innerHTML = '';

    const searchBar = createSearchBar((query) => fetchNews(query));
    appDiv.appendChild(searchBar);

    const categorySelector = createCategorySelector();
    appDiv.appendChild(categorySelector);

    const loadingIndicator = createLoadingIndicator();
    const errorContainer = createErrorContainer();
    const newsContainer = createNewsContainer();
    appDiv.appendChild(loadingIndicator);
    appDiv.appendChild(errorContainer);
    appDiv.appendChild(newsContainer);

    setupEventListeners(searchBar);
    
    fetchNews();
}


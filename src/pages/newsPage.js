import { API_KEY, BASE_URL } from '../constants.js';
import {
  createNewsContainer,
  createNewsItems,
} from '../views/newsView.js';
import { createSearchBar } from '../views/searchBarView.js';
import { createErrorContainer } from '../views/errorView.js';
import { createLoadingIndicator } from '../views/loadingView.js';
import { createCategorySelector } from '../views/categoryView.js';

const CACHE_KEY = 'url-cache';

export async function fetchCached(url) {
  const cacheJSON = localStorage.getItem(CACHE_KEY);
  const cache = cacheJSON ? JSON.parse(cacheJSON) : {};

  let data = cache[url];
  if (data) {
    console.log('Cache hit', url);
    return data;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  data = await response.json();
  cache[url] = data;
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));

  return data;
}


const fetchNews = async (q = '', category = 'general') => {
    let url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}&category=${category}`;
    if (q) {
      url += `&q=${q}`;
    }
   
    const loadingIndicator = document.getElementById('loading');
    const errorContainer = document.getElementById('error');
    const newsContainer = document.getElementById('newsContainer');
   
    
  if (q || category !== 'general') {
    loadingIndicator.style.display = 'block';
  } 
    errorContainer.innerHTML = '';
    newsContainer.innerHTML = ''; 

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
       const data = await fetchCached(url);
       console.log('API Response:', data);

       const filteredArticles = data.articles.filter(article => !article.title.toLowerCase().includes('removed'));

       if (filteredArticles.length === 0) {
        errorContainer.innerText = 'No results found.';
       } else {
        filteredArticles.forEach(article => {
            const newsItem = createNewsItems(article);
            newsContainer.appendChild(newsItem);
        });
       }
    } catch (error) {
        errorContainer.innerText = `Failed to fetch news: ${error.message}`;
    } finally {
            loadingIndicator.style.display = 'none';    
    }
};

const setupEventListeners = (searchBar, categorySelector) => {
    const button = searchBar.querySelector('#searchButton');
    const input = searchBar.querySelector('#searchInput');
    const newsContainer = document.getElementById('newsContainer');

    button.addEventListener('click', () => {
        const query = input.value.trim();
        categorySelector.value = 'general';

        newsContainer.innerHTML = '';

        fetchNews(query);

        input.value = '';
        input.focus();
    });

    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            button.click();
        }
    });

    categorySelector.addEventListener('change', () => {
        const category = categorySelector.value;
        const query = input.value.trim();
        newsContainer.innerHTML = '';
        
        fetchNews(query, category);

        input.value = '';
        input.focus();
    });
};


export const createNewsPage = () => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';
    
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


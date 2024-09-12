
export const createSearchBar = (onSearch) => {
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search-bar');

    searchDiv.innerHTML =`
     <input type="text" id="searchInput" class="search-input" placeholder="Search news..." />
     <button id="searchButton" class="search-button">Search</button>`;

     const input = searchDiv.querySelector('#searchInput');
     const button = searchDiv.querySelector('#searchButton');

     button.addEventListener('click', () => onSearch(input.value));

     return searchDiv;
}

export const createLoadingIndicator = () => {
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.id = 'loading';
    loadingDiv.innerText = 'Loading...';
    return loadingDiv;
}

export const createErrorContainer = () => {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.id = 'error';
    return errorDiv;
}

export const createNewsContainer = () => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-container');
    newsDiv.id = 'newsContainer';
    return newsDiv;
}

export const createNewsItem = (article) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
    <h3>${article.title || 'No title available'}</h3>
        <p>${article.description || 'No description available'}</p>
        <a href="${article.url}" target="_blank">Read more</a>`;

        return newsItem;
}
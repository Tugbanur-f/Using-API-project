
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




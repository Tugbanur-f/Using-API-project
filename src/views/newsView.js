
export const createNewsContainer = () => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-container');
    newsDiv.id = 'newsContainer';
    return newsDiv;
}

export const createNewsItems = (article) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const image = document.createElement('img');
    image.src = article.urlToImage ? article.urlToImage : 'path/to/default-placeholder.jpg';
    image.alt = article.title || 'News Image';
    image.classList.add('news-image');

   
    const textDiv = document.createElement('div');
    textDiv.classList.add('news-text');

    const title = document.createElement('h3');
    title.innerText = article.title;

    const description = document.createElement('p');
    description.innerText= article.description || 'No description available.';

    const link = document.createElement('a');
    link.href = article.url;
    link.target = '_blank';
    link.textContent = 'Read More';
    link.classList.add('read-more');

    textDiv.appendChild(title);
    textDiv.appendChild(description);
    textDiv.appendChild(link);

    newsItem.appendChild(image);
    newsItem.appendChild(textDiv);

     return newsItem;
}







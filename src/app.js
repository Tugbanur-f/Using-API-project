const apiKey = 'ffed47bc97ff4de387c93c008f132581';

const container = document.createElement('div');
container.classList.add('container');

const searchButton = document.createElement('button');
searchButton.id = 'searchButton';
searchButton.textContent = 'Search';
container.appendChild(searchButton);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'searchInput';
searchInput.placeholder = 'Search news....';
container.appendChild(searchInput);


const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;



async function fetchData(url) {
    
}
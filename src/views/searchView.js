export const createSearchBar = (onSearch) => {
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search-bar');

    searchDiv.innerHTML =`
     <input type="text" id="searchInput" class="search-input" placeholder="Search news..." />
     <button id="searchButton" class="search-button">Search</button>`;

     const input = searchDiv.querySelector('#searchInput');
     const button = searchDiv.querySelector('#searchButton');

     button.addEventListener('click', () => onSearch(input.value));
     
     input.addEventListener('keyup', (event) => {
       if(event.key === "Enter") {
        button.click();
       } 
    });

     return searchDiv;
}

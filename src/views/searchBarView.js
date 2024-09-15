
export const createSearchBar = (onSearch) => {
    const searchBar = document.createElement('div');
    searchBar.classList.add('search-bar');

    searchBar.innerHTML =`
     <input type="text" id="searchInput" class="search-input" placeholder="Search news..." />
     <button id="searchButton" class="search-button">Search</button>`;

     const input = searchBar.querySelector('#searchInput');
     const button = searchBar.querySelector('#searchButton');

     button.addEventListener('click', () => onSearch(input.value));
     
     setTimeout(() => {
        input.focus();
      }, 0);
     
     input.addEventListener('keyup', (event) => {
       if(event.key === "Enter") {
               button.click();
       } 
    });

     return searchBar;
}

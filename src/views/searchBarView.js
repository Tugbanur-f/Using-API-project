export const createSearchBar = () => {
  const searchBar = document.createElement("div");
  searchBar.classList.add("search-bar");

  searchBar.innerHTML = `
     <input type="text" id="searchInput" class="search-input" placeholder="Search news..." />
     <button id="searchButton" class="search-button">Search</button>`;

  return searchBar;
};

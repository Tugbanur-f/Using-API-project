export const createLoadingIndicator = () => {
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("loading");
  loadingDiv.id = "loading";
  loadingDiv.innerText = "Loading...";

  return loadingDiv;
};

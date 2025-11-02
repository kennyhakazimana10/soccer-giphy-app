// Soccer Giphy Fetch Assignment
// [Kenny-All Hakazimana]

console.log("script.js connected");

// API setup
const apiKey = "YG6tZFaXyFS266X3yWueK5R4Nvm63GHj";
const button = document.querySelector("#fetch-btn");
const container = document.querySelector("#gif-container");
const searchInput = document.querySelector("#search-input");

// Fetch gifs from Giphy
async function fetchGifs(searchTerm = "soccer") {
  container.innerHTML = "";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12&rating=g`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const gifs = data.data;

    if (gifs.length === 0) {
      container.innerHTML = `<p class="text-danger">No gifs found for "${searchTerm}".</p>`;
      return;
    }

    gifs.forEach(gif => {
      const imgUrl = gif.images.original.url;
      const img = `<div class="col-6 col-md-3"><img src="${imgUrl}" class="img-fluid" alt="${searchTerm} gif"></div>`;
      container.innerHTML += img;
    });

  } catch (err) {
    console.error("Error fetching gifs:", err);
    container.innerHTML = `<p class="text-danger">Error fetching gifs. Try again later.</p>`;
  }
}

// Event listener
button.addEventListener("click", () => {
  const term = searchInput.value.trim();
  if (term) {
    fetchGifs(term);
  } else {
    fetchGifs();
  }
});

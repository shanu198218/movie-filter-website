const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');

// Render movie cards
function renderMovies(movies) {
  const placeholder = document.getElementById('placeholderText');
  if (placeholder) placeholder.remove();

  movieGrid.innerHTML = '';

  if (movies.length === 0) {
    movieGrid.innerHTML = `<p style="color: #aaa;">No shows found.</p>`;
    return;
  }

  movies.forEach(item => {
    const show = item.show || item;
    const image = show.image?.medium || 'https://via.placeholder.com/300x400?text=No+Image';
    const summary = show.summary ? show.summary.replace(/<[^>]*>/g, '') : 'No description available';

    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="image-container">
        <img src="${image}" alt="${show.name}" />
        <button class="close-btn">✕</button>
      </div>
      <div class="movie-info">
        <h2>${show.name}</h2>
        <p>${summary.slice(0, 100)}...</p>
      </div>
    `;
    movieGrid.appendChild(card);
    card.querySelector('.close-btn').addEventListener('click', () => {
  card.remove();
});
  });
}

// Fetch shows based on search
function fetchMovies(query) {
  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => renderMovies(data))
    .catch(err => {
      movieGrid.innerHTML = `<p style="color: red;">Failed to fetch shows.</p>`;
      console.error(err);
    });
}

// Initial render: hardcoded 3 show names
const initialShows = ['batman', 'superman', 'spiderman'];
Promise.all(initialShows.map(name =>
  fetch(`https://api.tvmaze.com/search/shows?q=${name}`).then(res => res.json())
)).then(results => {
  const top3 = results.map(r => r[0]);
  renderMovies(top3);
});


searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      fetchMovies(query);
    }
  }
});

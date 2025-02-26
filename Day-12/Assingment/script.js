addEventListener('submit', function(e) {
    e.preventDefault();
    let movies = JSON.parse(localStorage.getItem('movies')) || []; //????
    let movie = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        year: document.getElementById('year').value,
        rating: document.getElementById('rating').value,
        genre: document.getElementById('genre').value,
        poster: document.getElementById('poster').value
    };
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    alert('Movie added successfully!');
    this.reset();
});

function displayMovies() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let movieList = document.getElementById('movieList');
    if (!movieList) return; ////????
    movieList.innerHTML = movies.length ? '' : '<tr><td colspan="7">No movies added yet!</td></tr>';
    movies.forEach((movie, index) => {
        movieList.innerHTML += `<tr>
            <td>${movie.name}</td>
            <td>${movie.description.substring(0, 100)}...</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" width="50"></td>
            <td><button onclick="deleteMovie(${index})">Delete</button></td>
        </tr>`;
    });
}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

document.addEventListener('DOMContentLoaded', displayMovies);

function filterMovies() {
    let query = document.getElementById('search').value.toLowerCase();
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.filter(m => m.name.toLowerCase().includes(query) || m.genre.toLowerCase().includes(query)).forEach((movie, index) => {
        movieList.innerHTML += `<tr>
            <td>${movie.name}</td>
            <td>${movie.description.substring(0, 100)}...</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" width="50"></td>
            <td><button onclick="deleteMovie(${index})">Delete</button></td>
        </tr>`;
    });
}

function sortMovies(type) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.sort((a, b) => (a[type] > b[type]) ? 1 : -1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

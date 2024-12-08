import { BACKEND_URI } from "./config.js"

const query_field = document.getElementById("query_field");
query_field.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getMovieQuery(query_field.value);
    }
})

function getMovieQuery(query) {
    let url = encodeURI(`${BACKEND_URI}/movies/search/?movie_title=${query}`)
    console.log(url)
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "mode": "cors",
        }
    })
        .then(response => response.json())
        .then(movies => createHTMLFromMovies(movies))
        .catch(error => console.log(error));
}

function createHTMLFromMovies(movies) {
    const container = document.getElementById('movies_list');
    container.innerHTML = "";

    console.log(movies)
    if (movies.results.length === 0) {
        console.log('No movies found.');
        container.innerHTML = "No Movies found, Sorry !"
        return;
    }

    movies.results.forEach(movie => {
        const movieDiv = document.createElement('div');;
        movieDiv.innerHTML = `
        <div class="movie_entry">
            <h2 class="movie_title">${movie.title}</h2>
            <p class="movie_release"> Released in ${movie.release_date}</p>
            <h4> Overview  </h4>
            <p> ${movie.overview}</p>
        </div>
        `
        container.appendChild(movieDiv);
    })
    console.log(movies);
}



const config = require('../config');

function TMDBMoviesByQuery(query) {
    const url = encodeURI(config.TMDB_URI + 'search/movie?query='+ query + '&include_adult=false&language=en-US&page=1');
    const options = {
        method: 'GET',
        headers: config.get_headers
    };

    console.log(url);
    return fetch(url, options)
        .then(res => res.json())
}

search = async(req, res) => {
    let movie_title = req.query.movie_title;
    if (! movie_title) {
        res.json({ text: 'No movie_title found in this request}'});
        return;
    }
    const movie_list = await TMDBMoviesByQuery(movie_title)
    res.json(movie_list);
};

module.exports = {search}

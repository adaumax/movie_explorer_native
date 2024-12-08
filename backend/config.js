require("dotenv").config({ path: `${__dirname}/../.env` });

module.exports = {
    PORT: Number(process.env.PORT),
    TMDB_URI: process.env.TMDB_URI,
    WEBSTORM_LIVE_EDIT_PORT: process.env.WEBSTORM_LIVE_EDIT_PORT,
    BACKEND_URI: process.env.BACKEND_URI,
    get_headers: {
        accept: 'application/json',
        contentType: 'application/json',
        Authorization: 'Bearer ' + process.env.TMDB_APIKEY,
    }
}
const express = require("express");
const expressListRoutes = require("express-list-routes");
const moviesRoutes = require("./routes/moviesRoutes");
const cors = require("cors")
const config = require("./config");

const PORT = config.PORT;
const app = express();

app.use(express.json())
const frontendURI = `${config.BACKEND_URI}:${config.WEBSTORM_LIVE_EDIT_PORT}`

app.use(cors({
    origin: frontendURI,
}))
app.use("/movies", moviesRoutes);

app.listen(PORT, () => {
    expressListRoutes(app)
    console.log(`Listening on ${PORT}`);
})

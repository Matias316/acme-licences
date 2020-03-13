const track = require("./track.controller");
const song = require("./song.controller");
const movie = require("./movie.controller");
const movieScene = require("./movie-scene.controller");
const trackEvent = require("./track-event.controller");
const trackEventStatus = require("./track-event-status.controller");

module.exports = {
    track,
    song,
    movie,
    movieScene,
    trackEvent,
    trackEventStatus
};
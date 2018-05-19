// dotenv access //

require("dotenv").config();

// required nodes & keys //

var Twitter = require("twitter");
var Spotify = require("spotify");
var request = require("request");
var keys = require("./keys.js");
var fs = require("fs");

// command lines for liri //

var commandArg = process.argv[2];

    // my-tweets --- retrieve tweets //

    // spotify-this-song --- retrieve song info from Spotify api //

    // movie-this --- retrieve movie info from OMDB api //

    // do-what-it-says ---

// function to retrieve Twitter tweets via API //

function tweets() {

    var client = new Twitter(keys.twitterKeys);

    var params = { screen_name: 'chaely' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });

}

// function to retrieve Spotify info via API //

function spotifySong {

    spotify
        .search({ type: 'track', query: 'All the Small Things' })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });

}

// function to retrieve OMDB info via API //

function omdbInfo {

    var queryURL = "http://www.omdbapi.com/?t" +

}

// function to access read/write content from random.txt //


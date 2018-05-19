require("dotenv").config();

//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

var Twitter = require("twitter");
var Spotify = require("spotify");
var request = require("request");
var fs = require("fs");

var keys = require("./keys.js");
var twitterKeys = keys.twitterKeys;


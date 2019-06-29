// Read and set any environment variables with the dotenv package.
require("dotenv").config();

// Required modules
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');
var keys = require('./keys');

// "You should be able to access your keys information like so."
var spotify = new Spotify(keys.spotify);

// Error message if there is no valid query.
if (process.argv.length < 3) {
	console.log(
		`Please enter a valid command. You can enter:
		concert-this <artist-name> | Bands in Town artist events search
		spotify-this-song <song title> | Spotify song infomation search
		movie-this <movie title> | OMDB movie information search`
	);
};

var queryType = process.argv[2];
var searchString = process.argv.split[3];

// console.log(searchString);

// if (process.argv[2] === `concert-this`)

// // Bands in Town search function
// function concertThis(){
// 	request(`https://rest.bandsintown.com/artists/ ${searchString} /events?app_id=codingbootcamp` , function(error, response, body){
// 		console.log(error);
// 		console.log(response);
// 		console.log(body);
// 	});
// };

/*
INSTRUCTIONS
Node.js packages required: Node-Spotify-API, Request, Moment, DotEnv
Import keys.js and store it in a variable.
Make it so liri.js can take in the following commands:
	concert-this <artist name>
		Search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
			* Name of the venue
			* Venue location
			* Date of the Event (use moment to format this as "MM/DD/YYYY")
	spotify-this-song <song title>
		This will show the following information about the song in your terminal/bash window:
			* Artist(s)
			* The song's name
			* A preview link of the song from Spotify
			* The album that the song is from
			* If no song is provided then your program will default to "The Sign" by Ace of Base.
	movie-this <movie title>
		This will output the following information to your terminal/bash window:
			* Title of the movie.
			* Year the movie came out.
			* IMDB Rating of the movie.
			* Rotten Tomatoes Rating of the movie.
			* Country where the movie was produced.
			* Language of the movie.
			* Plot of the movie.
			* Actors in the movie.
		You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use "trilogy".
	do-what-it-says
		Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. Feel free to change the text in that document to test out the feature for other commands.
*/
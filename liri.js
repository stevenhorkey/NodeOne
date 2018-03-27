require("dotenv").config();
var fs = require('fs')
var request = require("request");

var keys = require('./key.js')

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var command = process.argv[2]
var input = process.argv[3]

function myTweets(input){
    
}
function spotifyThisSong(input){

}
function movieThis(input){
    if (input){
        var title = input.replace(' ','+')
        request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {
             
                console.log(JSON.parse(body).Title);
                console.log(JSON.parse(body).Year);
                console.log(JSON.parse(body).imdbRating);    
                console.log(JSON.parse(body).Ratings[1].Value);    
                console.log(JSON.parse(body).Country);
                console.log(JSON.parse(body).Language);
                console.log(JSON.parse(body).Plot);
                console.log(JSON.parse(body).Actors);
            }
        });
    } else {
        request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {
             
                console.log(JSON.parse(body).Title);
                console.log(JSON.parse(body).Year);
                console.log(JSON.parse(body).imdbRating);    
                console.log(JSON.parse(body).Ratings[1].Value);    
                console.log(JSON.parse(body).Country);
                console.log(JSON.parse(body).Language);
                console.log(JSON.parse(body).Plot);
                console.log(JSON.parse(body).Actors);
            }
        });
    }
    
    
}
function doWhatItSays(input){

}

if (command === 'my-tweets'){
    myTweets(input)
} else if (command === 'spotify-this-song'){
    spotifyThisSong(input)
} else if (command === 'movie-this'){
    movieThis(input)
} else if (command === 'do-what-it-says'){
    doWhatItSays(input)
} else {
    console.log('error')
}

require("dotenv").config();
var fs = require('fs')
var request = require("request");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var keys = require('./key.js')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2]
var nodeInput = process.argv[3]

function myTweets(input){
    var params = {screen_name: 'stevedevtech'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            throw error;
        } else {
            // console.log(tweets);
            for (var i = 0; i<20; i++){
                console.log('-----------------------')
                console.log(tweets[i].text)
                console.log(tweets[i].created_at)
                console.log('-----------------------') 
            }
        }
    });   
}
function spotifyThisSong(input){
    if (input!==undefined){
        spotify.search({ type: 'track', query: input }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else{
                console.log('----------------------'); 
                console.log(data.tracks.items[0].artists[0].name); 
                console.log(data.tracks.items[0].name); 
                console.log(data.tracks.items[0].preview_url); 
                console.log(data.tracks.items[0].album.name);
                console.log('----------------------'); 
            }
        });
    } else{
        spotify.search({ type: 'track', query: 'Zeppelin' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else{
                console.log('----------------------'); 
                console.log(data.tracks.items[0].artists[0].name); 
                console.log(data.tracks.items[0].name); 
                console.log(data.tracks.items[0].preview_url); 
                console.log(data.tracks.items[0].album.name);
                console.log('----------------------'); 
            }
        });
    }
    
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
    var fs = require('fs'),
    path = require('path')   

    fs.readFile("random.txt", "utf8", function (error, data){

        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
        var dataArr = data.split(",");
      
        console.log(dataArr);

        doThisCommand = dataArr[0];
        doThisInput = dataArr[1];

        console.log(doThisCommand)
        console.log(doThisInput)

        conditionals(doThisCommand,doThisInput)
    });
}

function conditionals(command,nodeInput){
    if (command === 'my-tweets'){
        myTweets(nodeInput)
    } else if (command === 'spotify-this-song'){
        spotifyThisSong(nodeInput)
    } else if (command === 'movie-this'){
        movieThis(nodeInput)
    } else if (command === 'do-what-it-says'){
        doWhatItSays(nodeInput)
    } else {
        console.log('error!!!')
    }
}

conditionals(command, nodeInput)
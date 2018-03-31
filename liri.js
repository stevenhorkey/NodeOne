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
            var writeArr = ['########','my-tweets']
            for (var i = 0; i<20; i++){
                console.log('-----------------------')
                writeArr.push('-----------------------')
                console.log(tweets[i].text)
                writeArr.push(tweets[i].text)
                console.log(tweets[i].created_at)
                writeArr.push(tweets[i].created_at)
                console.log('-----------------------') 
                writeArr.push('-----------------------')
                
            }
            for(var i=0;i<writeArr.length;i++){
                writeArr[i] = writeArr[i] + '\n';
            }
            writeArr = writeArr.join('')
            
            writeArr = writeArr.replace(',','');
            // console.log(writeArr)
            fs.appendFile("log.txt",writeArr,function (err) {

                if (err) {
                  return console.log(err);
                }
              
            });
        }
    });   
}
function spotifyThisSong(input){
    if (input!==undefined){
        spotify.search({ type: 'track', query: input }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else{
                var writeArr = ['########','spotify-this-song', nodeInput]
                
                console.log('----------------------'); 
                writeArr.push('----------------------')                
                console.log(data.tracks.items[0].artists[0].name); 
                writeArr.push(data.tracks.items[0].artists[0].name)   
                console.log(data.tracks.items[0].name); 
                writeArr.push(data.tracks.items[0].name)                
                console.log(data.tracks.items[0].preview_url); 
                writeArr.push(data.tracks.items[0].preview_url)         
                console.log(data.tracks.items[0].album.name);
                writeArr.push(data.tracks.items[0].album.name)          
                console.log('----------------------');
                writeArr.push('----------------------')                                 
                for(var i=0;i<writeArr.length;i++){
                    writeArr[i] = writeArr[i] + '\n';
                }
                writeArr = writeArr.join('')
                
                writeArr = writeArr.replace(',','');
                // console.log(writeArr)
                fs.appendFile("log.txt",writeArr,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    } else{
        spotify.search({ type: 'track', query: 'Zeppelin' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else{
                var writeArr = ['########','spotify-this-song', nodeInput]
                
                console.log('----------------------'); 
                writeArr.push('----------------------')              
                console.log(data.tracks.items[0].artists[0].name); 
                writeArr.push(data.tracks.items[0].artists[0].name)      
                console.log(data.tracks.items[0].name); 
                writeArr.push(data.tracks.items[0].name)              
                console.log(data.tracks.items[0].preview_url); 
                writeArr.push(data.tracks.items[0].preview_url)      
                console.log(data.tracks.items[0].album.name);
                writeArr.push(data.tracks.items[0].album.name)      
                console.log('----------------------'); 
                writeArr.push('----------------------')              

                for(var i=0;i<writeArr.length;i++){
                    writeArr[i] = writeArr[i] + '\n';
                }
                writeArr = writeArr.join('')
                
                writeArr = writeArr.replace(',','');
                // console.log(writeArr)
                fs.appendFile("log.txt",writeArr,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    }
    
}
function movieThis(input){
    if (input){
        var title = input.replace(' ','+')
        request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {

                var writeArr = ['########','movie-this', nodeInput]
                
                console.log('----------------------')
                writeArr.push('----------------------')                 
                console.log(JSON.parse(body).Title);
                writeArr.push(JSON.parse(body).Title)              
                console.log(JSON.parse(body).Year);
                writeArr.push(JSON.parse(body).Year)                 
                console.log(JSON.parse(body).imdbRating); 
                writeArr.push(JSON.parse(body).imdbRating)         
                console.log(JSON.parse(body).Ratings[1].Value); 
                writeArr.push(JSON.parse(body).Ratings[1].Value)         
                console.log(JSON.parse(body).Country);
                writeArr.push(JSON.parse(body).Country)                 
                console.log(JSON.parse(body).Language);
                writeArr.push(JSON.parse(body).Language)                 
                console.log(JSON.parse(body).Plot);
                writeArr.push(JSON.parse(body).Plot)                 
                console.log(JSON.parse(body).Actors);
                writeArr.push(JSON.parse(body).Actors)
                console.log('----------------------');                
                writeArr.push('----------------------');            
                                 

                for(var i=0;i<writeArr.length;i++){
                    writeArr[i] = writeArr[i] + '\n';
                }
                writeArr = writeArr.join('')
                
                writeArr = writeArr.replace(',','');
                // console.log(writeArr)
                fs.appendFile("log.txt",writeArr,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    } else {
        request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {
             
                var writeArr = ['########','movie-this']
                
                console.log('----------------------')
                writeArr.push('----------------------')                 
                console.log(JSON.parse(body).Title);
                writeArr.push(JSON.parse(body).Title)              
                console.log(JSON.parse(body).Year);
                writeArr.push(JSON.parse(body).Year)                 
                console.log(JSON.parse(body).imdbRating); 
                writeArr.push(JSON.parse(body).imdbRating)         
                console.log(JSON.parse(body).Ratings[1].Value); 
                writeArr.push(JSON.parse(body).Ratings[1].Value)         
                console.log(JSON.parse(body).Country);
                writeArr.push(JSON.parse(body).Country)                 
                console.log(JSON.parse(body).Language);
                writeArr.push(JSON.parse(body).Language)                 
                console.log(JSON.parse(body).Plot);
                writeArr.push(JSON.parse(body).Plot)                 
                console.log(JSON.parse(body).Actors);
                writeArr.push(JSON.parse(body).Actors)
                console.log('----------------------');                
                writeArr.push('----------------------');            
                                 

                for(var i=0;i<writeArr.length;i++){
                    writeArr[i] = writeArr[i] + '\n';
                }
                writeArr = writeArr.join('')
                
                writeArr = writeArr.replace(',','');
                // console.log(writeArr)
                fs.appendFile("log.txt",writeArr,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
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
        var writeArr = ['########\n',command+'\n']
        writeArr = writeArr.join('')        
        fs.appendFile("log.txt",writeArr,function (err) {
    
            if (err) {
              return console.log(err);
            }
        });
        
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
#!/usr/bin/env node
var Twitter = require('twitter')

var  client  = new Twitter ( {  
    consumer_key : 'joueurcoin' , 
    consommateur_secret : 'ingesupB1' , 
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  } ) ;

  client.get('favorites/tweets', function(error, tweets, response) {
    console.log(tweets);
    console.log(response);
  });
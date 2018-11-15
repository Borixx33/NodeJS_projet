#!/usr/bin/env node
var Twitter = require('twitter')

var  client  = new Twitter ( {  
    consumer_key : 'joueurcoin' , 
    consommateur_secret : 'ingesupB1' , 
    access_token_key : '1561334624-k82qoSdsVY5wCwEkZOA0RYR9lilloul3p82dECUAi', 
    access_token_secret : 'REWBYxf5Jvj5GZjwSssseZxfr5bcUwBvY9Hpq4CaRzo8COx7'
  } ) ;

  client.get('favorites/tweets', function(error, tweets, response) {
    console.log(tweets);
    console.log(response);
  });
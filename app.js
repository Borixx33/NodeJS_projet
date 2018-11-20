// Appel des modules
const inquirer = require('inquirer')
var Twitter = require ('twitter'); 
var config = require ('./code.js');
var T = new Twitter (config);


// Demande a l'utilisateur l'hashtag et le nombre de recherche qui souhaite
inquirer.prompt([
  {
  type: 'input',
  message: 'Entrez votre l\'hashtag que vous souhaitez chercher',
  name: 'hashtag'
  }, {
  type: 'input',
  message: 'Entrez le nombre de cherche que vous voulez',
  name: 'nombre'
  },
 ]).then(answers => {
   //Configurez vos paramètres de recherche
  var params = { 
    q: answers.hashtag, 
    count: answers.nombre, 
    result_type: 'recent', 
    lang: 'en' 
  }

  // Lancer votre recherche en utilisant les paramètres ci-dessus
  T.get('search/tweets', params, function(err, data, response) {
    if(!err){
     // Parcourir les tweets renvoyés
    for(let i = 0; i < data.statuses.length; i++){
        // Récupére l'ID tweet des données renvoyées
        let id = { id: data.statuses[i].id_str }
        // Essayer de favorie échoue, enregistre le message d'erreur
        T.post('favorites/create', id, function(err, response){
          // Si le favorie échoue, enregistre le message d'erreur
          if(err){
            console.log(err[0].message);
          }
          // Si le favori a réussi, enregistrez l'URL du tweet
          else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
      }
    } else {
      console.log(err);
    }
  })
 });

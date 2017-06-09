let http = require('http');
let fs = require('fs');
let express = require('express');
let app = express();
let generator = require('./generator');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  let content = fs.readFileSync('./views/pages/home.ejs', 'utf-8');
  response.render('index', {content : content});
});

app.post('/', (request, response) => {
  let grille = generator.grille();
  let bonus = generator.bonus();
  let content = fs.readFileSync('./views/pages/home.ejs', 'utf-8');
  response.render('index', {content : content, grille : grille, bonus : bonus});
});

app.get('/contact', (request, response) => {
  let content = fs.readFileSync('./views/pages/contact.ejs', 'utf-8');
  response.render('index', {content : content});
});

app.post('/contact', (request, response) => {
  let content = '<div class="alert alert-success center">en cours de développement\n\
 (l\'envoi du message n\'est que simulé)<br/><strong>Message envoyé</strong></div>';
  response.render('index', {content : content});
});

app.get('*',  (request, response) => {
  let content = fs.readFileSync('./views/erreurs/_404.ejs', 'utf-8');
  response.status(404).send(content);
});

app.listen(8080);
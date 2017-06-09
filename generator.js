let number = require('lodash/number');

module.exports = {
  name: "Generator",
  description: "grille method : generate a random loto grid - bonus method : generate a random bonus number",
  grille: () => {
    let numbers = [];
    let tirage = 0;
    for (i=0; i<5; i++) {
      do {
        tirage = number.random(1,50);
        //équivaut à => tirage = Math.floor((Math.random() * 50) + 1);
      } while (numbers.indexOf(tirage) !== -1);
      numbers.push(tirage);
    }
    return numbers;
  },
  bonus: () => {
  	let bonus = [];
    for (i=0; i<2; i++) {
      do {
        tirage = number.random(1,12);
        //équivaut à => tirage = Math.floor((Math.random() * 12) + 1);
      } while (bonus.indexOf(tirage) !== -1);
      bonus.push(tirage);
    }
    return bonus;
    //équivaut à => bonus = Math.floor((Math.random() * 10) + 1);
  }
};
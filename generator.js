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
      } while (bonus.indexOf(tirage) !== -1);
      bonus.push(tirage);
    }
    return bonus;
  }
};
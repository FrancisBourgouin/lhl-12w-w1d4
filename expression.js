
// function expression
let getCharacters = function() {

  let characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  let index = Math.floor(Math.random() * characters.length);

  return characters[index];
};

let characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];

// forEach using a callback
let forEach = function(list, fct) {
  for (let item of list) {
    fct(item);
  }
};

characters.forEach(printCharacter);
// function declaration hoisted
function printCharacter(char) {
  console.log('Hello my name is: ', char);
}

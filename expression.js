
// function expression
var getCharacters = function() {
  var characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  var index = Math.floor(Math.random() * characters.length);

  return characters[index];
};

var characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];

// forEach using a callback
var forEach = function(list, fct) {
  for (var item of list) {
    fct(item);
  }
};

characters.forEach(printCharacter);
// function declaration hoisted
function printCharacter(char) {
  console.log('Hello my name is: ', char);
}

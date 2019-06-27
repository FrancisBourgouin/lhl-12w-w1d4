// Declaration, Expression & Arrow Functions

function myFunction(a,b) { //Don't use this one, it's sad and old
  return a + b;
}

const myFunctionAgain = function(a,b) {
  return a + b;
};

const myFunctionButArrow = (a,b) => {
  return a + b;
};

// Function acting as a value

let assigningAFunction = myFunctionAgain;

// myFunctionAgain = function(a,b){
//     return a - b
// }
//

// Calling & Referencing a function

console.log(myFunctionAgain(1,2));
console.log(assigningAFunction(1, 2));

let assigningAFunctionInterogationMark  = myFunctionAgain(1,2);
console.log(assigningAFunctionInterogationMark);

// Callbacks

const listOfNames = ['Bob','Sothis','Helios','Ramses'];

for (let i = 0; i < listOfNames.length; i++) {
  console.log(`Hello ${listOfNames[i]}`);
}

for (let currentPosition in listOfNames) {
  console.log(`Hello ${listOfNames[currentPosition]}`);
}

for (let name of listOfNames) {
  console.log(`Hello ${name}`);
}


const sayHello = (names) =>{
  for (let name of names) {
    console.log(`Hello ${name}`);
  }
};

sayHello(['Xerxes','Little Chicken']);

let otherNames = ['Alphonse','Gontran','Herménégilde'];
sayHello(otherNames);

const yellHello = (names) => {
  for (let name of names) {
    console.log(`HELLO ${name.toUpperCase}`);
  }
};

const modularSayHello = name => {
  console.log(`Hello ${name}`);
};

const modularYellHello = name => {
  let output = `Hello ${name}`;
  console.log(output.toUpperCase());
};

const modularSingHello = name => {
  let output = `🎵 Hello ${name} 🎵`;
  console.log(output);
};

// const listNames = (names, type) => {
//     for(let name of names) {
//         if(type === 'say') {
//             modularSayHello(name)
//         }
//         else if(type === 'yell') {
//             modularYellHello(name)
//         }
        
//     }
// }

const listNames = (names, callback) => {
  for (let name of names) {
    callback(name);
  }
};

let otherNamesAgain = ['Ceres','Vulcan','Icarus','Jupiter'];

listNames(otherNamesAgain, modularSingHello);

listNames(otherNamesAgain, modularSayHello);

listNames(otherNamesAgain, function(name) {
  console.log(`HI AGAIN ${name}`);
});


// forEach & filter

const listOfNumbers = [42, 7, 3.1415926, 22, 37];

// const forEachNumber = (numbers) => {
//     let output = []
//     for(let number of numbers){
//         if(number < 15){
//             output.push(number)
//         }
//     }
//     return output
// }

const smallerThanFifteen = number => number < 15;

const isItAnInteger = number => Number.isInteger(number);

const forEachNumber = (numbers, condition) => {
  let output = [];
  for (let number of numbers) {
    if (condition(number)) {
      output.push(number);
    }
  }
  return output;
};

console.log(forEachNumber(listOfNumbers, isItAnInteger));
console.log(forEachNumber(listOfNumbers, (number) => number > 10));

let youngsters = [
  { name:"Tyson", age:18, amountOfDrinks:20},
  { name: "Keveun", age: 33, amountOfDrinks: 2},
  { name: "Réal", age: 19, amountOfDrinks: 200}
];

const whoCanDrink = (listOfPeople, conditionFct) => {
  let output = [];
  for (let person of listOfPeople) {
    if (conditionFct(person)) {
      output.push(person.name);
    }
  }
  return output;
};

const legalAgeInOntario = person => person.age >= 19;
const personTooDrunk = person => person.drinks > 50;

console.log(whoCanDrink(youngsters, person => person.age >= 19));

whoCanDrink(youngsters, person => {
  return legalAgeInOntario(person) && personTooDrunk(person);
});


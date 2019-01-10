# Lecture W1D4

## Content

- First-class objects
- Higher-Order Functions
- Callbacks

## Functions as First-Class Objects (or First-Class Citizen)

1. Functions can be assigned to a variable (function expression) or to a property of an object
2. Passed as arguments into functions
3. Returned as values from functions

### An example of an anonymous function

```
var getCharacter= function () {
  var characters = ['Froddo','Sam','Merry','Peppin'];
  var index = Math.floor(Math.random() * characters.length);
  return characters[index];
}
```

### Functions Declaration vs Function Expressions

- Function declarations and function expressions provide the same functionality
- Some differences that we need to be aware of

  - The body of function declarations are hoisted contrary to function expressions
  - Hence function expressions cannot be called before their declaration
  - Anonymous function cannot be identified in a stack trace. Although we can name our anonymous functions

- console.log is also a function and it can be assigned to any variable

```
var log = console.log;

log("You shall not pass!");
```

## Higher-Order Functions

- Since a function can be treated like any other value it can be passed around

- Let's implement a logEach function

```
function logEach(list) {
  for (var i=0; i < list.length; i++) {
    console.log(list[i]);
  }
}
```

- Let's modified the logEach function to code our own forEach by passing a function as an argument:

```
function forEach(list, fn) {
  for (var i=0; i < list.length; i++) {
    fn(list[i]);
  }
}
```

- Passing the console.log function as an argument allow us to get the same result:

```
forEach(numbers, console.log)
```

## Callbacks

- Let's do a more complicated example. Let's implement our own filter function

- Suppose we want to get a an array of all the numbers that are divisible by three, we can use the following function:

```
function divisibleByThree(numbers) {
  var filteredNumbers = [];
  for (var i=0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}
```

- Now this works, but what if we want the numbers that are divisible by five, we would have to code another function.

```
function divisibleByFive(numbers) {
  var filteredNumbers = [];
  for (var i=0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}
```

- And we would repeat the function if we need the numbers that are divisible by two.
- When we repeat code, it means we're not following the DRY principle

- What if we want to make it more reusable. Let's generalize the function by adding a parameter:

```
function divisibleBy(numbers, div) {
  var filteredNumbers = [];
  for (var i=0; i < numbers.length; i++) {
    if (numbers[i] % div === 0) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}
```

- This version is much more reusable because it works with any number
- How do we generalize the function even more by providing the desired functionality as a parameter?
- Let's make a general filter function that works with any kind of filter by using a callback function:

```
function filter(numbers, callback) {
  var filteredNumbers = [];
  for (var i=0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}
```

- To get the same result as the divisibleByThree function, we are providing the following **callback**:

```
function isDivByThree (number) {
  return number % 3 === 0
}
```

- And we call the filter function using the callback:

```
filter(numbers, isDivByThree);
```

- Or we can simply create an anonymous function as an argument:

```
filter(numbers, function(number) {
  return number % 3 === 0;
})
```

- In fact, we can pass any function to create any filter we want:

```
filter(numbers, function(number) {
  number > 15
})
```

## Summary

- In JavaScript, functions are first-class objects (or first-class citizens) ie they can be treated like any other values

  1. Functions can be assigned to a variable (function expression) or to a property of an object
  2. Passed as arguments into functions
  3. Returned as values from functions

- In JavaScript, a callback is a function passed as an argument to another function

- A function that accepts (or return) a function as arguments is called a higher-order function

- The benefit of a higher-order functions (a function that takes a callback) is a highly reusable function allowing our code to stay DRY!

- Callbacks are also used when running asynchronous code.

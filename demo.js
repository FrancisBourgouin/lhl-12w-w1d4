let movies = [
  { title: 'Black Panther', year: 2018, genre: 'action', rating: 7.4 },
  { title: 'Avengers Infinity War', year: 2018, genre: 'action', rating: 8.5 },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Fantasy/Science Fiction',
    rating: 8.7,
  },
  {
    title: 'Incredibles 2',
    year: 2018,
    genre: 'Science Fiction/Action',
    rating: 7.8,
  },
  { title: 'Deadpool 2', year: 2018, genre: 'action', rating: 7.8 },
  { title: 'Ant-Man and the Wasp', year: 2018, genre: 'action', rating: 7.2 },
  {
    title: 'Venom',
    year: 2018,
    genre: 'Thriller/Science Fiction',
    rating: 6.8,
  },
  {
    title: 'Ralph Breaks the Internet',
    year: 2018,
    genre: 'Comedy',
    rating: 7.3,
  },
];

// filter function using a callback
let filterArr = function(list, cb) {
  let outputArr = [];
  // loop through the array of objects and
  // push if the rating is 8 or more
  for (let item of list) {
    if (cb(item)) {
      outputArr.push(item);
    }
  }

  return outputArr;
};

// Update function equivalent to the built-in map function
let update = function(list, cb) {
  let outputArr = [];

  for (let item of list) {
    outputArr.push(cb(item));
  }

  return outputArr;
};

let filterComedy = function(movieObj) {
  return movieObj.genre === 'Comedy';
};

let highestRating = function(movieObj) {
  return movieObj.rating > 8;
};

let goodComedies = function(movieObj) {
  return movieObj.rating > 8 && movieObj.genre === 'action';
};

let compactTitles = function(movieObj) {
  return movieObj.title + ' ' + movieObj.genre + ' ' + movieObj.year;
};

// Getting the titles as strings
let titles = update(movies, compactTitles);

// Getting the movies with higher ratings
let goodMovies = filterArr(movies, highestRating);

// Filtering movies for good comedies
let comedies = filterArr(movies, goodComedies);

// Chainning the built-in filter and map functions
let myBestTitles = movies.filter(goodComedies).map(compactTitles);

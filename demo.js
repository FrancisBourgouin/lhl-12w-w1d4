var movieList = [
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

function filter(list, callback) {
  var filteredList = [];
  for (var i = 0; i < list.length; i++) {
    if (callback(list[i])) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

// Using our filter function to get the movies with a higher rating
var highestRatings = filter(movieList, function(movie) {
  return movie.rating >= 8;
});

console.log(highestRatings);

// Create a new array with a different format for the movie objects
var update = function(list, callback) {
  var output = [];
  for (var item of list) {
    output.push(callback(item));
  }
  return output;
};

var movieTitles = update(movieList, function(movieObj) {
  var newMovieObj = {
    title: movieObj,
  };
  return newMovieObj;
});

console.log(movieTitles);

var highRating = function(movie) {
  return movie.rating >= 8;
};

// getting the titles of only the movies with a rating of 8 or above
var highRatingTitles = update(filter(movieList, highRating), function(
  movieObj
) {
  var newObject = {
    title: movieObj.title,
  };
  return newObject;
});

console.log(highRatingTitles);

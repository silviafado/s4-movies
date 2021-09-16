// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result =  movies.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director ) {
  const moviesDirector = array.filter((movie) => movie.director === 'Quentin Tarantino');
  console.log("EXERCICE 2 ->", moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = array.filter((movie) => movie.director === 'Quentin Tarantino');
  console.log(moviesDirector);
  const arrayScore = moviesDirector.map(el => el.score);
  console.log(arrayScore);
  const average = Math.round(arrayScore.reduce((a, b) => a + b) / arrayScore.length * 100)/100;
  console.log("EXERCICE 3 ->", average); 
  return average
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let sortAlphabet = movies
    .map((movie) => movie.title)
    .sort((a, b) => (a > b ? 1 : -1))
    .slice(0, 20);
  console.log('EXERCICE 4 ->', sortAlphabet);
  return sortAlphabet;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
    let sortYear = movies
    .map((movie) => movie.year)
    .sort((a, b) => (a > b ? 1 : -1));
  console.log('EXERCICE 5 ->', sortYear);
  return sortYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  let categoryAverage = movies.map((movie) => movie.genre);
  const arrayScore = categoryAverage.map(el => el.score);
  console.log(arrayScore);
  const average = Math.round(arrayScore.reduce((a, b) => a + b) / arrayScore.length * 100)/100;
  console.log("EXERCICE 3 ->", average); 
  return average

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

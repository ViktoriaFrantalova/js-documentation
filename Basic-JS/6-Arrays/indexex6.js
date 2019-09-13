// Execise 7 - Movies

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
];

// All the movies in 2018 whit rating >4
// Sort them by their rating
// Descending order
// Pick their title

// const titles = movies
// .filter(m => m.year === 2018 && m.rating >= 4)
// .sort((a, b) => a.rating - b.rating)
// .reverse()
// .map(m => m.title)

// console.log(titles); // [ 'b', 'a' ]

const titles = movies
  .filter(movie => {
    return movie.year === 2018 && movie.rating >= 4;
  })
  .sort((a, b) => {
    return a.rating - b.rating;
  })
  .reverse()
  .map(movie => {
    return movie.title;
  });

console.log(titles);

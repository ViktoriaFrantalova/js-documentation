// Local vs Global

const color = 'red'; // global

function start() {
  const message = 'hi';
  const color = 'blue'; // Local
  console.log(color);
}

function stop() {
  const message = 'bye';
}

start();

// stylovanie CSS v JS

const nadpis = document.getElementById('nadpis');

// css stylovanie vieme pridvat aj v javascripte
// .stylePreNadpis {
//   font-size: 3rem;
//   background: blue;
//   color: white;
// }
// naskor si musime selektnut element ktori chceme stylovat nasledne vyuzijeme style objekt v ktorom su vsetky moznosti stylovania ktore staci prepisat
nadpis.style.backgroundColor = 'blue';
nadpis.style.color = 'white';
nadpis.style.fontSize = '3rem';

nadpis.classList.add('stylePreNadpis');
nadpis.classList.add('schovaj');
nadpis.classList.add('zobraz');

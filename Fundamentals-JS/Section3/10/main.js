// addEventListener & the Event Object

window.onload = () => {
  const btn = document.getElementById('btn');

  const pridajClassu = e => {
    console.log('e.target:', e.target); // target vytahuje informaciu nad akym elementom sa vykonal event
    console.log('e.target.id:', e.target.id); // btn
    console.log('e.target.className:', e.target.className); // aa
    console.log('e.target.classList:', e.target.classList); // DOMTokenList ["aa", value: "aa"]
    btn.classList.value === 'second'
      ? btn.classList.remove('second')
      : btn.classList.add('second');

    e.preventDefault();
  };

  btn.addEventListener('click', pridajClassu);
};

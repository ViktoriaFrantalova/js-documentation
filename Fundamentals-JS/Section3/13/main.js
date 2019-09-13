window.onload = () => {
  const btnAdd = document.getElementById('btn-add');
  const btnClear = document.getElementById('btn-clear');
  const input = document.getElementById('task');

  localStorage.setItem('name', 'vivka');
  localStorage.setItem('age', '21');

  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  console.log(name, age);

  btnAdd.addEventListener('click', e => {
    localStorage.setItem(e.timeStamp, input.value);
  });

  btnClear.addEventListener('click', e => {
    localStorage.clear();
  });

  const data = ['aaa', 'bbb'];
  // premena objektu alebo pola na json
  const stringifyData = JSON.stringify(data);
  console.log('JSON.stringify(data):', stringifyData);
  // premena jsonu na objekt alebo pole
  console.log('JSON.parse(stringifyData):', JSON.parse(stringifyData));

  const names = ['janko', 'hrasko', 'vajcak'];
  localStorage.setItem('names', JSON.stringify(names));

  const values = JSON.parse(localStorage.getItem('names'));
  console.log(values);
};

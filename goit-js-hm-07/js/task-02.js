const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ul = document.querySelector("#ingredients");
  console.log(ul);
  ingredients.forEach(elem =>{
    const newItem = document.createElement('li');
    newItem.textContent = elem;
    console.log(newItem);
    ul.append(newItem);
  })
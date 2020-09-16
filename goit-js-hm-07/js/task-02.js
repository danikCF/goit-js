const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ul = document.querySelector("#ingredients");
const liArrayRef = ingredients.map(elem =>{
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = elem;
  return ingredientsItem;
})
ul.append(...liArrayRef);
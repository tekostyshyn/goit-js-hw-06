const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.className = 'item';
  return liEl
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsItems);


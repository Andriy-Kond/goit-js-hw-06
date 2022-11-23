const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const arr = [];

ingredients.forEach(element => {
  const ingredient = document.createElement("li");
  ingredient.textContent = element;
  ingredient.classList = "item";
  arr.push(ingredient);

});

const list = document.querySelector("#ingredients");
list.append(...arr);

// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector(".gallery");

const array = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", array);

  
list.style.display = "flex";
list.style.flexDirection = "column";
list.style.listStyle = "none";
list.style.gap = "20px";

const img = document.querySelectorAll(".gallery img");
img.forEach(elem => {
  elem.style.width = "250px";
});



// elem.setAttribute(name, value) - встановлює атрибут.

// document.createElement(tagName); -  створюється в пам'яті, в DOM його ще немає.
// element.append - додати елементом
// article.innerHTML - додати рядком з оновленням (для порожнього елементу, чи для очишення вмісту)
// elem.insertAdjacentHTML(position, string); - додати рядком без оновлення (додає в кінець.) 
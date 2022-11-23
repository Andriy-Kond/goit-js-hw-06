// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

// Задаю початковий розмір шрифта - середній між максимальним і мінімальним у інпуту:
const fontSizeCurrent = (Number(refs.fontSizeControl.max) - Number(refs.fontSizeControl.min)) / 2 + Number(refs.fontSizeControl.min);
refs.text.style.fontSize = `${fontSizeCurrent}px`;

// розмір тексту дорівнює значенню повзунка:
refs.fontSizeControl.addEventListener("input", (event) => {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
});
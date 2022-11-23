// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const refs = {
  validationInput: document.querySelector("#validation-input"),
  borderValid: document.querySelector("#validation-input.valid"),
  borderInvalid: document.querySelector("#validation-input.invalid"),
};

refs.validationInput.addEventListener('blur', () => {
  //  if (Number(refs.validationInput.value.length) === Number(refs.validationInput.dataset.length)) - в цьому прикладі можна і без Number у value.length
  if (refs.validationInput.value.length === Number(refs.validationInput.dataset.length)) {
    refs.validationInput.classList.remove("invalid");
    refs.validationInput.classList.add("valid");
  }
  else {
    refs.validationInput.classList.remove("valid");
    refs.validationInput.classList.add("invalid");
  }
});
// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  inputVal: document.querySelector('#name-input'),
  outputVal: document.querySelector('#name-output'),
}

refs.inputVal.addEventListener("input", (event) => {
  
  // Метод trim() видаляє пробіли по боках рядку.
  // Метод trim() не зміню вихідний рядок.
  if (event.currentTarget.value.trim() !== '') {
    refs.outputVal.textContent = event.currentTarget.value;
  }

  else {
    refs.outputVal.textContent = "Anonymous";
  }
  
});






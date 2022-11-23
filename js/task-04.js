// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.




const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  btnIncr: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
}

let counterValue = 0;
function render() {
  refs.value.textContent = counterValue;
}
render();

refs.btnDecr.addEventListener('click', () => { 
  counterValue -= 1;
  render();
});

refs.btnIncr.addEventListener('click', () => { 
  counterValue += 1;
  render();
});


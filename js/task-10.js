// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const boxesEl = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('[type="number"]');

buttonCreate.addEventListener("click", onBtnCreateClick);
buttonDestroy.addEventListener("click", onBtnDestroyClick);
inputEl.addEventListener("input", () => {});

// створення початкової функції по кліку "створити"
function onBtnCreateClick() {
  destroyBoxes();
  if (inputEl.value !== "") { // Перевірка поля вводу на порожність
    createBoxes(Number(inputEl.value)); // функція створення div-вів
    cleaning(); // Очистка поля вводу
  }

  else{ // прохання ввести число
    const element = document.createElement("span");
    element.textContent = "Так а скільки робити-то? Число ж введи!";
    boxesEl.append(element);
  }
}

// Створення заданої кількості DIV-вів
function createBoxes(amount) { 
  const arr = arrDivs(amount); // створє і повертає масив div-ів
  const arrStyles = styles(arr); // створює необхідні стилі

  boxesEl.append(...arrStyles);
  console.log(`додаю ${amount} div:`, boxesEl);
}

// функція створює і повертає массив DIV-ів
function arrDivs(amount) {
  const arrayEl = [];
  for (let i = 0; i < amount; i+=1) {
    const divEl = document.createElement("div");
    arrayEl.push(divEl);
  }

  return arrayEl;
}

// Функція створює необхідні стилі 
// чомусь через reduce стилі створюються лише у першого елементу масиву...
function styles(arr) {
  let value = 30;
  for (let i = 0; i < arr.length; i+=1) {
    arr[i].style.width = `${value}px`; 
    arr[i].style.height = `${value}px`;
    arr[i].style.backgroundColor = getRandomHexColor();
    value += 10;
  }

  return arr;
}

function destroyBoxes() {
  console.log("очищаю вміст div#boxes");
  boxesEl.innerHTML = "";
}

// Очистка вмісту div#boxes
function onBtnDestroyClick() { 
  destroyBoxes();
  cleaning(); 
}

// Очистка поля вводу:
function cleaning() {
  inputEl.value = "";
}

// рандомайзер:
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
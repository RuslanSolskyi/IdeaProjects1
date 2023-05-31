// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// Додаємо обробник події 'submit' до форми
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    // Отримуємо значення полів форми
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;

    // Створюємо об'єкт зі зчитаними даними
    var data = {
        name: name,
        surname: surname,
        age: age
    };

    // Виводимо об'єкт в документ
    var output = document.getElementById("output");
    output.innerHTML = "Об'єкт: " + JSON.stringify(data);
});
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// Отримуємо посилання на блок з цифрою
var numberBlock = document.getElementById("numberBlock");

// Отримуємо поточне значення цифри з localStorage, або встановлюємо його як 0, якщо значення відсутнє
var number = parseInt(localStorage.getItem("number")) || 0;

// Додаємо 1 до числа
number += 1;

// Оновлюємо відображення числа в блоку
numberBlock.textContent += number;

// Зберігаємо оновлене значення числа у localStorage
localStorage.setItem("number", number);
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
// // Отримуємо поточну дату та час
// var currentDate = new Date();
//
// // Отримуємо масив сеансів з localStorage, або створюємо новий масив, якщо він відсутній
// var sessions = JSON.parse(localStorage.getItem("sessions")) || [];
//
// // Додаємо поточну дату та час до масиву сеансів
// sessions.push(currentDate.toString());
//
// // Зберігаємо оновлений масив сеансів у localStorage
// localStorage.setItem("sessions", JSON.stringify(sessions));
//
// // Переадресовуємо користувача на сторінку sessions.html
// window.location.href = "sessions.html";
// //-----------------------
// // Отримуємо масив сеансів з localStorage
// var sessions = JSON.parse(localStorage.getItem("sessions")) || [];
//
// // Отримуємо посилання на блок, в який будемо відображати сеанси
// var sessionsBlock = document.getElementById("sessions");
//
// // Перебираємо масив сеансів та відображаємо кожен сеанс в DOM
// sessions.forEach(function(session) {
//     var sessionElement = document.createElement("div");
//     sessionElement.className = "session";
//     sessionElement.textContent = session;
//     sessionsBlock.appendChild(sessionElement);
// });
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
var objects = []; // Масив з 100 об'єктів
// Додайте об'єкти до масиву, наприклад:
for (var i = 1; i <= 100; i++) {
    objects.push({ id: i, name: 'Об\'єкт ' + i });
}

var currentPage = 1; // Поточна сторінка
var pageSize = 10; // Кількість об'єктів на сторінку

function renderPage(page) {
    var output2 = document.getElementById("output2");
    output2.innerHTML = ""; // Очищення контейнера перед виведенням нових об'єктів

    var startIndex = (page - 1) * pageSize;
    var endIndex = startIndex + pageSize;

    for (var i = startIndex; i < endIndex; i++) {
        if (i >= objects.length) {
            break;
        }

        var object = objects[i];
        var div = document.createElement("div");
        div.textContent = "ID: " + object.id + ", Name: " + object.name;
        output2.appendChild(div);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}

function nextPage() {
    var totalPages = Math.ceil(objects.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
}

// Виводимо першу сторінку при завантаженні сторінки
renderPage(currentPage);
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
function hideElement() {
    var element = document.getElementById("text");
    element.style.display = "none";
}
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
function verifyAge() {
    var ageInput = document.getElementById("ageInput");
    var age = parseInt(ageInput.value);

    if (isNaN(age)) {
        alert("Введіть коректний вік");
    } else if (age < 18) {
        alert("Ви повинні бути старше 18 років");
    } else {
        alert("Вік перевірений! Доступ дозволено");
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
function createTable() {
    var rowsInput = document.getElementById("rowsInput"); // Отримуємо елемент input для кількості рядків
    var colsInput = document.getElementById("colsInput"); // Отримуємо елемент input для кількості ячейок
    var contentInput = document.getElementById("contentInput"); // Отримуємо елемент input для вмісту ячейок

    var rows = parseInt(rowsInput.value); // Отримуємо значення кількості рядків та перетворюємо його на ціле число
    var cols = parseInt(colsInput.value); // Отримуємо значення кількості ячейок та перетворюємо його на ціле число
    var content = contentInput.value; // Отримуємо значення вмісту ячейок

    // Перевіряємо, чи введені значення є коректними
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1 || content.trim() === '') {
        alert("Будь ласка, введіть коректну кількість рядків і ячейок, та вміст ячейок.");
        return;
    }

    var tableContainer = document.getElementById("tableContainer"); // Отримуємо контейнер для таблиці
    tableContainer.innerHTML = ''; // Очищуємо контейнер перед створенням нової таблиці

    var table = document.createElement("table"); // Створюємо елемент <table>

    // Створюємо рядки та ячейки таблиці згідно з введеними значеннями
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr"); // Створюємо рядок таблиці

        for (var j = 0; j < cols; j++) {
            var cell = document.createElement("td"); // Створюємо ячейку таблиці
            cell.textContent = content; // Задаємо вміст ячейки
            row.appendChild(cell); // Додаємо ячейку до рядка
        }

        table.appendChild(row); // Додаємо рядок до таблиці
    }

    tableContainer.appendChild(table); // Додаємо таблицю до контейнера
}
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// Отримуємо елемент блоку ціни
var priceBlock2 = document.getElementById("priceBlock2");

// Перевіряємо, чи була збережена попередня дата оновлення ціни
var lastUpdatedDate = localStorage.getItem("lastUpdatedDate");
if (lastUpdatedDate) {
    // Перетворюємо збережену дату в об'єкт Date
    var lastDate = new Date(lastUpdatedDate);

    // Отримуємо поточну дату та час
    var currentDate = new Date();

    // Розраховуємо різницю між поточною датою та останньою оновленою датою в секундах
    var timeDiff = Math.abs(currentDate - lastDate) / 1000;

    // Перевіряємо, чи пройшло менше ніж 10 секунд з останнього оновлення
    if (timeDiff >= 10) {
        // Оновлюємо ціну, додаючи 10грн
        var currentPrice = parseInt(priceBlock2.textContent) + 10;
        priceBlock2.textContent = currentPrice + "грн";

        // Зберігаємо нову дату оновлення ціни
        var newUpdatedDate = new Date().toString();
        localStorage.setItem("lastUpdatedDate", newUpdatedDate);
    }
} else {
    // Якщо це перше завантаження сторінки, зберігаємо поточну дату як останню дату оновлення ціни
    var initialUpdatedDate = new Date().toString();
    localStorage.setItem("lastUpdatedDate", initialUpdatedDate);
}
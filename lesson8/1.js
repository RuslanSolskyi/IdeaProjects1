// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Оголошення функції
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


const usersArray = [];

// Додавання 10 обєктів циклом
for (let i = 1; i <= 10; i++) {
    const user = new User(i, `Name${i}`, `Surname${i}`, `email${i}@example.com`, `12345678${i}`);
    usersArray.push(user);
}

console.log(usersArray);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsers = usersArray.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
usersArray.sort((a, b) => a.id - b.id);
console.log(usersArray);
usersArray.sort((a, b) => b.id - a.id);//перевірка бо йдуть всі підряд
console.log(usersArray);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clientsArray = [];
//
// for (let i = 1; i <= 10; i++) {
//     const client = new Client(i, `Name${i}`, `Surname${i}`, `email${i}@example.com`, `12345678${i}`, ['product1', 'product2', 'product3']);
//     clientsArray.push(client);
// }
//
// console.log(clientsArray);
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// Створення порожнього масив
const clients = [];

// Наповнення масиву
clients.push(new Client(1, "John", "Doe", "johndoe@example.com", "1234567890", ["item1", "item2"]));
clients.push(new Client(2, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item1", "item3", "item4"]));
clients.push(new Client(3, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item4"]));
clients.push(new Client(4, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item4"]));
clients.push(new Client(5, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item3", "item4"]));
clients.push(new Client(6, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item1", "item3", "item4"]));
clients.push(new Client(7, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item3", "item4"]));
clients.push(new Client(8, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item1", "item3", "item4"]));
clients.push(new Client(9, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item3", "item4", "item5", "item6"]));
clients.push(new Client(10, "Jane", "Smith", "janesmith@example.com", "0987654321", ["item3", "item4"]));
// Додайте сюди ще 8 об


console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// Використовуємо метод sort для сортування масиву
clients.sort(function(a, b) {
    return a.order.length - b.order.length;
});

console.log(clients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineVolume} л`);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}
// Створення нового автомобіля
let myCar = new Car("Civic", "Honda", 2016, 190, 1.9);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
myCar.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
myCar.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
myCar.increaseMaxSpeed(20);
console.log(myCar.maxSpeed);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
myCar.changeYear(2023);
console.log(myCar.year);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let driver = {
    name: "John",
    licenseNumber: "ABC123"
};
myCar.addDriver(driver);
console.log(myCar.driver); // Виведе: { name: 'John', licenseNumber: 'ABC123' }

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Приклад створення об'єкту Car і використання його функцій
const car = new Car('A6', 'Audi', 2022, 250, 2.0);
car.drive();

car.info();
car.increaseMaxSpeed(50);
console.log(car.maxSpeed);

car.changeYear(2023);
console.log(car.year);

const driver2 = {
    name: 'John2',
    age: 30,
    licenseNumber: '123456789'
};

car.addDriver(driver2);
console.log(car.driver); // Виведе об'єкт водія
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// Конструктор "Попелюшка"
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}


let cinderellas = [
    new Cinderella("Cindy1", 20, 7),
    new Cinderella("Cindy2", 22, 6.5),
    new Cinderella("Cindy3", 25, 8),
    new Cinderella("Cindy4", 25, 5),
    new Cinderella("Cindy5", 21, 3),
    new Cinderella("Cindy6", 25, 8),
    new Cinderella("Cindy7", 25, 9),
    new Cinderella("Cindy8", 25, 5),
    new Cinderella("Cindy9", 23, 8),
    new Cinderella("Cindy10", 25, 9),

];

// Клас "Принц"
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

// Створення об'єкта класу "Принц"
let prince = new Prince("John", 28, 7);

// пошук відповідної попелюшки за допомогою циклу
let foundCinderella = null;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.foundShoe) {
        foundCinderella = cinderellas[i];
        break;
    }
}

// Виведення результату
if (foundCinderella !== null) {
    console.log("Принц " + prince.name + " знайшов свою попелюшку:");
    console.log(foundCinderella);
} else {
    console.log("Принц " + prince.name + " не знайшов свою попелюшку.");
}

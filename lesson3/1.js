// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0;i<10;i++){
    document.write('<div> Блок 0 </div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i=0;i<10;i++){
    document.write('<div>Блок ' + (i+1) + '</div>');
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let y = 1;
while (y <= 20) {
    document.write('<h1>While 0</h1>');
    y++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 1;
while (i <= 20) {
    document.write('<h1>While ' + i + '</h1>');
    i++;
}
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
 //   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let i = 0; i < listOfItems.length; i++) {
    document.write('<ul><li>' + listOfItems[i] + '</li></ul>'); // додавання ел
}


//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productCard = '<div class="product-card">';
    productCard += '<img src="' + product.image + '" alt="" class="product-image">';
    productCard += '<h3 class="product-title">' + product.title.toUpperCase() + '. Price - ' + product.price + '</h3>';
    productCard += '</div>';
    document.write(productCard);
}
//
//
//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
document.write('<h2>Користувачі зі статусом true:</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write('<p>' + users[i].name + '</p>');
    }
}
document.write('<h2>Користувачі зі статусом false:</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write('<p>' + users[i].name + '</p>');
    }
}
document.write('<h2>Користувачі які старше за 30:</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write('<p>' + users[i].name + '</p>');
    }
}
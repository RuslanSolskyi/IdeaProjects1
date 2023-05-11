// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S (a,b) {
    let result= a * b ;
    return result;
}
let x = S(5,10)
console.log(x)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function S20 (r) {
    let result= math.PI*r**2 ;
    return result;
}
let x2 = S20(6)
console.log(x2)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function ts (h,r2) {
    let result= 2*3.14*r2*h ;
    return result;
}
let x3 = ts(5,7)
console.log(x3)
// - створити функцію яка приймає масив та виводить кожен його елемент

function M(...array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let myArray = [1, 2, 3, 4, 5,6];
M(myArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function T(text, tag) {
    document.write(`<${tag}>${text}</${tag}>`);
    console.log(text)
}
T('QWERTY','p');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function U(text2) {
    document.write(`<ul><li>${text2}</li><li>${text2}</li><li>${text2}</li></ul>`);
}
U('text2')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function fun(text, kilk) {
    let ul = document.createElement("ul"); // Створюємо елемент <ul>

    for (let i = 0; i < kilk; i++) {
        let li = document.createElement("li"); // Створюємо елемент <li>
        li.textContent = text; // Задаємо текст елементу <li>
        ul.appendChild(li); // Додаємо елемент <li> до елементу <ul>
    }

    return ul;
}

// Приклад використання функції
let ulList = fun("text4", 4
);
document.body.appendChild(ulList);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function M3(arr) {
    let Masiv = [];
    for (let i = 0; i < arr.length; i++) {
        Masiv.push(arr[i]);
    }
    return Masiv;
}
let myArray2 = [1, 'hello', true,1, 'hello', true];
let Masiv = M3(myArray2);
console.log(Masiv);


// -створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// - створити функцію яка повертає найменьше число з масиву
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let array2 = [-12,1,2,10,-200];
let Masiv4 = findMin(array2);
console.log(Masiv4);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let array1 = [1,2,10];
let Masiv3 = sum(array1);
console.log(Masiv3);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let array = [11, 22, 33, 44];



let Masiv2 = swap(array,2,3);
console.log(Masiv2);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
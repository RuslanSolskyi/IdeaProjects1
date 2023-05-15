// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let s2 = (a,b) => a * b;
console.log(s2(5,10))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let r = (r2) =>2* r2 **2;
console.log(r(6))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let ts2 = (h2,r22) =>2*3.14*r22*h2 ;
console.log(ts2(5,7))
// - створити функцію яка приймає масив та виводить кожен його елемент

let M = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let myArray = [1, 2, 3, 4, 5,6];
M(myArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let T = (text) => {
    document.write(`<p>${text}</p>`);

}
T('QWERTY',);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let U = (text2,tag) =>{
    document.write(`<ul><${tag}>${text2}</${tag}><${tag}>${text2}</${tag}><${tag}>${text2}</${tag}></ul>`);
}
U('text22','li')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let fun = (text34, kilk) => {
    document.write('<ul>')
    for (let i = 0; i < kilk; i++) {
        document.write(`<li>${text34}</li>`)
    }
    document.write('</ul>')
}

fun ('HELLO',5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let M3 = (arr12) => {
    document.write('<ul>')
    for (let item of arr12) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}
let myArray2 = [1, 'hello', true,1, 'hello', true];
M3(myArray2)

// -створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id:1, name: 'vasia', age:31},
    {id:2, name: 'vasia2', age:32},
    {id:3, name: 'vasia3', age:33},
];
let uservivid = (arr) => {
    for(let user of arr) {
        document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`)
    }
}
uservivid(users)
// - створити функцію яка повертає найменьше число з масиву
let findMin = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let array2 = [-12,1,2,10,200];
let Masiv4 = findMin(array2);
console.log(Masiv4);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum=(arr) =>{
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
let swap = (arr, index1, index2) =>{
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let array = [11, 22, 33, 44];

let Masiv2 = swap(array,0,1);
console.log(Masiv2);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sunuah,currencyValues,exchangeCurrensy) => {
    for (let item of currencyValues) {
        if(item.currency ===exchangeCurrensy) {
            return sunuah/item.value;
        }
    }
}
let result = exchange(
    10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD')
console.log(result)
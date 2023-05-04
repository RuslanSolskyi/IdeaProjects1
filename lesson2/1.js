// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1,3.14,true,'ua',false,1000,'en',250,20,-2 ];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj = {
    title: 'qwerty',
    pageCount: 200,
    genre: 'literature',

};
let obj2 = {
    title: 'what',
    pageCount: 300,
    genre: 'encyclopedia',

};
let obj3 = {
    title: 'abc',
    pageCount: 100,
    genre: 'for children',

};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj2_1 = {
    title: 'qwerty',
    pageCount: 200,
    genre: 'literature',
    authors:[name='oleg', age=46],
};
console.log(obj2_1.authors)
let obj2_2 = {
    title: 'what',
    pageCount: 300,
    genre: 'encyclopedia',
    authors:[name='roman', age=38],
};
let obj2_3 = {
    title: 'abc',
    pageCount: 100,
    genre: 'for children',
    authors:[name='ruslan', age=24],
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr3 = [
    {name:'name1',username:'username1',password:'password1'},
    {name:'name2',username:'username2',password:'password2'},
    {name:'name3',username:'username3',password:'password3'},
    {name:'name4',username:'username4',password:'password4'},
    {name:'name5',username:'username5',password:'password5'},
    {name:'name6',username:'username6',password:'password6'},
    {name:'name7',username:'username7',password:'password7'},
    {name:'name8',username:'username8',password:'password8'},
    {name:'name9',username:'username9',password:'password9'},
    {name:'name10',username:'username10',password:'password10'},
]
console.log(arr3[0].password)
console.log(arr3[1].password)
console.log(arr3[2].password)
console.log(arr3[3].password)
console.log(arr3[4].password)
console.log(arr3[5].password)
console.log(arr3[6].password)
console.log(arr3[7].password)
console.log(arr3[8].password)
console.log(arr3[9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x =100500
if (x!==0) {
    console.log('Вірно')
}else {
    console.log('Невірно')
}let x1 =1
if (x1!==0) {
    console.log('Вірно')
}else {
    console.log('Невірно')
}let x2 =0
if (x2!==0) {
    console.log('Вірно')
}else {
    console.log('Невірно')}
let x3 =-3
if (x3!==0) {
    console.log('Вірно')
}else {
    console.log('Невірно')}

//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time =20
if (time>=0&&time<15) {
    console.log('1 чверть')
}else if (time>=15&&time<30) {
    console.log('2 чверть')
}
else if (time>=30&&time<45) {
    console.log('3 чверть')
}
else if (time>=59&&time<60) {
    console.log('4 чверть')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day =20
if (day>=0&&day<10) {
    console.log('1 декада')
}else if (day>=10&&day<20) {
    console.log('12 декада')
}else if(day>=20&&day<30) {
    console.log('3 декада')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day2 = +prompt('Введіть день тижня');
switch (day2) {
        case 1:
        document.write('Monday')
        break;case 2:
        document.write('Tuesday')
        console.log('Tuesday');
        break;case 3:
        document.write('Wednesday')
        break;case 4:
        document.write('thursday')
        break;case 5:
        document.write('friday')
        break;case 6:
        document.write('saturday')
        break;case 7:
        document.write('sunday')
        break;

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a =200
let b =200
if (a>b) {
    console.log('A ')
}else if (b>a) {
    console.log('B ')
}
else if (a=b) {
    console.log('A=B')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x5 =0
if (x5===0||x5===false||x5===null||x5===undefined) {
   x5 = false
}
console.log(x5)

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>=5) {
    console.log('super')}
else {
    console.log('NOsuper')};

if (coursesAndDurationArray[1].monthDuration>=5) {
    console.log('super')
}
else {
    console.log('NOsuper')};
if (coursesAndDurationArray[2].monthDuration>=5) {
    console.log('super')
}
else {
    console.log('NOsuper')};
if (coursesAndDurationArray[3].monthDuration>=5) {
    console.log('super')
}
else {
    console.log('NOsuper')};
if (coursesAndDurationArray[4].monthDuration>=5) {
    console.log('super')
}
else {
    console.log('NOsuper')};
if (coursesAndDurationArray[5].monthDuration>=5) {
    console.log('super')
}
else {
    console.log('NOsuper')};

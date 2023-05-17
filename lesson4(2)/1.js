// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let i = 0; i < strings.length; i++) {
    let length = strings[i].length;
    console.log("Довжина '" + strings[i] + "': " + length);
}
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
for (let i = 0; i < strings.length; i++) {
    let uppercaseString = strings[i].toUpperCase();
    console.log(uppercaseString);}
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strings2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let i = 0; i < strings2.length; i++) {
    let uppercaseString = strings2[i].toLowerCase();
    console.log(uppercaseString);}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let cleanedStr = str.trim().replace(/\s+/g, ' ');
console.log(cleanedStr);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) { //спліт-розкол- розбиває рядок на масив
    let words = str.split(' ');
    return words;
}
let str2 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str2);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let stringNumbers = numbers.map(function(number) {//новий масив
    return number.toString();//робить стрінгу
});

console.log(stringNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(nums2, direction) {
    // Використовуємо метод sort() для сортування масиву чисел
    // Залежно від значення аргументу 'direction', задаємо порядок сортування
    if (direction === '<') {
        nums2.sort(function(a, b) {
            return a - b;
        });
    } else if (direction === '>') {
        nums2.sort(function(a, b) {
            return b - a;
        });
    }
    return nums;
}

let nums = [11, 21, 3];
let ascendingResult = sortNums(nums, '<');
console.log(ascendingResult);

let descendingResult = sortNums(nums, '>');
console.log(descendingResult);

//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort(function(a, b) {
    return b.monthDuration - a.monthDuration;
});

console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCourses = coursesAndDurationArray.filter(function(course) {
    return course.monthDuration > 5;
});

console.log(filteredCourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let transformedArray = coursesAndDurationArray2.map(function(course, index) {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
});

console.log(transformedArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const deck = [];

const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

for (const suit of cardSuits) {
    for (const value of cardValues) {
        const color = (suit === 'spade' || suit === 'clubs') ? 'black' : 'red';
        deck.push({ cardSuit: suit, value: value, color: color });
    }
}

console.log(deck);

// - знайти піковий туз
const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

// - всі шістки
const sixes = deck.filter(card => card.value === '6');
console.log(sixes);
// - всі червоні карти
const red = deck.filter(card => card.color === 'red');
console.log(red);
// - всі буби
const bubi = deck.filter(card => card.cardSuit === 'diamond');
console.log(bubi);
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const deckBySuit = deck.reduce((result, card) => {
    if (result.hasOwnProperty(card.cardSuit)) {
        result[card.cardSuit].push(card);
    } else {
        result[card.cardSuit] = [card];
    }
    return result;
}, {});

console.log(deckBySuit);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass


// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);
const coursesWithSass2 = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithSass2);

function fetchUser() {
    //достукуємся до сайту з даними і повертаєм
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => user);
}

// function sayHello() {
//     //зен метод щоб не проміси витягувало а саму інформацію в ньому/
//     fetchUser().then(data => {
//         alert(`Hello ${data.name}`);
//     });
// }
// sayHello();
//аналогічно тільки інший метод
//асинг і евей ключові слова. авей не використовується без асинг /евей-павза
// async function sayHello2() {
//     const user = await fetchUser();
//     console.log(user);
//     alert(`Hello ${user.name}`);
// }
// sayHello2()


// async function sayHallo3() {
//     try {
//         const user = await fetchUser();
//         console.log(`Hello ${user.name}`);
//         console.log('helooooo');
//     }
//     catch (error) {
//         console.log(error.massage);
//     }
//
// }
// sayHallo3()
//Приклад

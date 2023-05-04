// Функція для отримання даних про користувачів з API JSONPlaceholder
function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.slice(0, 10));
}

// Функція для створення HTML-коду картки користувача
function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('user-card');

    const name = document.createElement('h2');
    name.textContent = user.name;
    card.appendChild(name);

    const email = document.createElement('p');
    email.textContent = user.email;
    card.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = user.phone;
    card.appendChild(phone);

    return card;
}

// Функція для відображення списку користувачів на сторінці
function showUsers(users) {
    const userList = document.querySelector('.user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const card = createUserCard(user);
        userList.appendChild(card);
    });
}

// Функція для фільтрації списку користувачів за ім'ям
function filterUsers(users, query) {
    return users.filter(user => {
        const name = user.name.toLowerCase();
        return name.includes(query.toLowerCase());
    });
}

// Отримання списку користувачів з API при завантаженні сторінки


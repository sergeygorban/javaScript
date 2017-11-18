/*map (Отображения) используются для сопоставления ключей значениям
*/



// Создание отображения
const userRole = new Map();

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

// Добавление данных

userRole.set(u1, 'User');
userRole.set(u2, 'User');
userRole.set(u3, 'Admin');

// или

userRole.set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');

// Передача в конструктор массив массивов

userRole.set([[u1, 'User'], [u2, 'User'], [u3, 'Admin']]);
console.log(userRole);

//Получение данных
console.log(userRole.get(u1));

// Проверка наличия заданного ключа
console.log(userRole.has(u1));

// Замена значения ключа
userRole.set(u1, 'Admin');

// Вывод количества элементов в отображении
console.log(userRole.size);

// Получение всех ключей
for (let u of userRole.keys()) {
    console.log(u.name);
    console.log(u);
}

// Получение всех значений
for (let u of userRole.values()) {
    console.log(u);
}

// Получение элементов в виде массива
const userRole = new Map();

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

userRole.set(u1, 'User');
userRole.set(u2, 'User');
userRole.set(u3, 'Admin');

for (let u of userRole.entries()) {
    console.log(u);
}

// Вывод значений в виде массива
console.log([...userRole.values()]);

//Удаление одиночного элемента
const userRole = new Map();

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };

userRole.set(u1, 'User');
userRole.set(u2, 'User');

userRole.delete(u1);

// Удаление всех элементов из отображения
userRole.clear();



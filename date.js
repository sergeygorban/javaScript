/*
Даты и время в JavaScript представляются встроенным объектом Date.


*/

// Создание текущей даты
const date = new Date();

//Создание конкретной даты
const date1 = new Date(2017,3,24);

// У объекта Date есть разнообразные методы
const date3 = new Date();
date3.getFullYear();

// Преобразование объекта Date в число, представляющее количество миллисекунд с полуночи 1 января 1 970 года (UTC).
const d = new Date();
const ts = d.valueOf();

// Преобразование в числовой формат
const numStr = "33.12";
const num = Number(numStr);
// Если строка не преобразовывается в число, тогда возвращается NaN

/* parseInt, parseFloat - отбрасывают все, что находят после числа, позволяя использовать не полностью
отфильтрованный ввод. parseInt - Второй аргумент задает систему исчисления
*/

const a = parseInt("16 volts", 10);
const b = parseInt("3а", 10);
const c = parseFloat("15.5 kph");


// Преобразование в строку
const n = 33.5;
const n1 = n.toString();


// Преобразование в логическое значение
const n2 = 0;
const n3 = Boolean(n1);
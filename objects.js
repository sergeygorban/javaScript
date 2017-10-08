/*

Мы рассмотрим следующие объекты встроенных типов.
    • Array
    • Date
    • RegExp
    • Мар и WeakМap
    • Set и WeakSet

В отличие от неизменяемых базовых типов, способных содержать только одно представленное значение, объекты могут
представлять несколько значений или сложные значения, а также изменять их в процессе существования. По сути, объект
это контейнер, и его содержимое может измениться со временем (это будет тот же объект с другим содержимым).

Содержимое объекта называется свойствами (properties) или членами (members), а свойства состоят из имен.и (или ключа)
и значения. Имена свойств должны быть строками или символами, а значения могут иметь любой тип (включая другие объекты)


*/

const A = Symbol("8");

// Создание пустого объекта
const obj = {};

//Добавление свойств в объект
obj.size;
obj.color = "yellow";

//Изменение значения свойства или добавление свойства и значения
obj["number"] = 3;
obj[A] = 8;

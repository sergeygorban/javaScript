/*
Функция (function) - это самодостаточный набор операторов, выполняющийся как единый блок; по существу, можно считать
ее подпрограммой. Функции - это основа мощи и выразительности языка JavaScript. В данной главе описаны основы их
применения и соответствующие механизмы. У каждой функции есть тело (body) - набор составляющих функцию операторов.

Функции в JavaScript являются объектами и могут быть переданы и присвоены подобно любым другим объектам. Важно
понимать различие между вызовом (calling) функции и просто обращением (referencing) к ней. Когда за идентификатором
функции следуют круглые скобки, JavaScript знает, что осуществляется вызов: выполняется тело функции и выражение
возвращает значение. Без круглых скобок вы просто обращаетесь к функции, как к любому другому значению, а это не вызов.
Возможность обращения к функции, как к любому другому значению (не вызывая ее), обеспечивает большую гибкость языка.
Например, вы можете присвоить функцию переменной, что позволит вызвать функцию под другим именем.

Основной механизм передачи информации при вызове функции - это аргументы (argument) функции (иногда называемые ее
параметрами (parameter)). Аргументы похожи на переменные, которые не существуют, пока функция не будет вызвана

Вы можете вызвать любую функцию с любым количеством аргументов. Если при вызове функции вы не укажете
аргументы, то им неявно присваивается значение undefined.

Нововведением ЕSб является способность определять стандартные значения (default value) для аргументов. Обычно, когда
значения для аргументов не заданы, им присваивается значение undefined. С помощью стандартных значений можно определить
некое другое значение для тех аргументов, которые не были переданы в функцию.

Обычно ключевое слово this имеет отношение к функциям, являющимся свойствами объектов. При вызове метода переменной
this присваивается значение конкретного объекта, в котором произошел вызов.

*/

// Создание функции
function hello() {
    console.log("Hello!");
}

// Вызов функции
hello();

// Функция, которая возвращает значение
function getName() {
    return "Бо";
}
getName();

// Обращение к функции
getName;

// Присвоение функции переменной и вызов
const newName = getName;
newName();

// Присвоение функции свойству объекта и вызов
const obj = {};
obj.fun = getName;
obj.fun();

// Создание функции в объекте
const s = {
    name: function () {
        return "Valar";
    },
    age: 234
};

s.name();

//В спецификацию ЕSб введен новый сокращенный синтаксис для методов. Следующее функционально эквивалентно
// предыдущему примеру.
const s1 = {
    name() {
        return "Valar";
    },
    age: 234
};

s1.name();



// Добавление функции в массив и вызов
const arr = [1, 2, 3];
arr[1] = getName;
arr[1]();

// Создание функции с параметрами и вызов. В этом объявлении функции а и Ь - это формальные аргументы (formal argument).
// При вызове функции формальные аргументы получают значения и становятся фактическими аргументами (actual argument).
function avg(a,b) {
    return(a + b)/2;
}
avg(12,12);

// Переменные примитивных типов не изменяются внутри функции
function rep(a) {
    return a + 10;
}

let a = 23;
console.log(rep(3));
console.log(a);

// Объекты изменяются внутри функции
function addToObj(obj1) {
    obj1.prop = 100;
    return obj1;
}

const obj1 = {};
console.log(addToObj(obj1));
console.log(obj1);

// Вызов функции, не передавая аргумент

function sas(a) {
    return a;
}
sas();
sas(1,2,3);

// Значения по умолчанию, если не переданы
function def(a = "def", b = "defau", c = "default") {
    return `${a} - ${b} - ${c}`;
}

def();
def(1,2);

// Ключевое слово this ---------------------------------------------------------------------------------------------
const o = {
    name: 'Wallace',
    speak() {return `Меня зовут ${this.name}!`;}
};

//Когда происходит вызов о.speak(),переменная this будет связана с объектом o.
o.speak();

//Важно понимать, что this связывается согласно тому, как функция вызвана, а не где объявлена. Таким образом, this
// связана с о не потому, что speak - это свойство о, а потому, что мы вызвали этот метод непосредственно из о(о.speak).
// Давайте рассмотрим, что будет, если мы присвоим ту же функцию переменной.

const speak = o.speak;
speak === o.speak;

//В связи с другим способом вызова функции движок JavaScript не знает, что функция была первоначально объявлена в о;
// таким образом, переменной this было присвоено значение undefined.
speak();
//-------------------------------------------------------------------------------------------------------------------


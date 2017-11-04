/*Когда говорят о методах, доступных в экземплярах класса, имеют в виду прототип (prototype) методов. Например,
упоминая метод shift, доступный в экземплярах класса Car, вы имеете в виду прототип метода и зачастую можете встретить
синтаксис Car.prototype.shift. (Точно так же функция forEach класса Array может выглядеть как Array.prototype.forEach.)
Теперь пришло время фактически узнать, что такое прототип и как JavaScript осуществляет динамический вызов (dynamic
dispatch), используя цепь прототипов (prototype chain).

Использование знака диеза (#) стало популярным соглашением для описания прототипов методов. Например, вы будете часто
встречать Car . prototype . shift, записанный просто как Car#shift.

Каждая функция имеет специальное свойство prototype. (Вы можете изменить его для любой функции f, введя на консоли
f.prototype.) Для обычных функций прототип не используется, но он критически важен для функций, которые действуют
как конструкторы объектов.

Свойство функции prototype становится важным, когда вы создаете новый экземпляр с использованием ключевого слова
new: вновь созданный объект имеет доступ к свойству prototуре его конструктора. Экземпляр объекта хранит его в своем
свойстве _proto_
Свойство proto считается внутренней частью JavaScгipt, как и любое свойство, заключенное между двойными символами
подчеркивания. Используя эти свойства, можно сделать очень, очень много вреда. Иногда их можно использовать очень
хитро и правильно, но пока у вас нет полного понимания JavaScript, я настоятельно рекомендую только просматривать
(но не изменять) эти свойства.

В прототипе важнее всего механизм динамического вызова (термин "dispatch" - это синоним вызова метода). Когда вы
пытаетесь получить доступ к свойству или методу объекта, если его не существует, JavaScript проверяет прототип объекта,
чтобы убедиться, есть ли он там. Поскольку все экземпляры данного класса совместно используют один и тот же прототип,
к свойству или методу, имеющемуся в прототипе, есть доступ для всех экземпляров этого класса.

Присвоение значения свойствам данных в прототипе класса обычно не выполняется. Дело в том что тогда значение этого
свойства будет доступно для всех экземпляров класса. Однако если значение свойства устанавливается в каком-нибудь
экземпляре, оно устанавливается именно в этом экземпляре, а не в прототипе, чтобы избежать путаницы и ошибок.
Если экземпляры должны иметь начальные значения свойств данных, то лучше устанавливать их в конструкторе.

Обратите внимание, что определение метода или свойства в экземпляре переопределяет версию в прототипе; помните,
что JavaScript сначала проверяет экземпляр, а только затем - прототип. Давайте рассмотрим все это на примере.
*/

class Car {

    constructor(make, model) {

        this.make = make;
        this.model = model;
    }

    shift(gear) {

        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(`Ошибочная передача: ${gear}`);
        }

        this.userGear = gear;
    }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "6");

car1.shift === Car.prototype.shift; //true
car1.shift === car2.shift; //true

car1.shift('D');
car1.shift('d'); // Ошибка

car1.shift = function (gear) {
    this.userGear = gear.toUpperCase();
};

car1.shift === Car.prototype.shift; //false
car1.shift === car2.shift; //false

car1.shift('d');
car1.userGear; // D

/*В этом примере ясно показано, как JavaScript осуществляет динамический вызов. Первоначально у объекта carl нет метода
shift, но при вызове carl.shift('D') JavaScript просматривает прототип для carl и находит метод с таким именем. Когда
мы заменяем метод shift собственной версией, то у объекта carl и у его прототипа появляется метод с этим именем.
Однако при вызове carl.shift('d'), будет вызван метод объекта carl, а не его прототипа.*/




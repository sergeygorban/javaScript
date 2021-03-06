/*Термин полиморфизм (polymorphism) из лексикона объектно-ориентированных языков описывает ситуацию, когда экземпляр
рассматривается как член не только. его собственного класса, но и любых суперклассов. На многих объектно-ориентированных
языках полиморфизм - это нечто особенное, приносящее большую пользу ООП. Язык JavaScript не является типизированным,
т.е. любой объект может быть использован в любом месте (хотя правильный результат не гарантирован). Таким образом, в
некотором смысле у JavaScript есть абсолютный полиморфизм.

В JavaScript предусмотрен оператор instanceof, который укажет вам, является ли объект экземпляром данного класса.
Как ни удивительно, но до тех пор, пока вы не оперируете напрямую свойствами prototype и _proto_, этот оператор будет
возвращать правильный результат.

Все объекты в JavaScript являются экземплярами корневого класса Object. Таким образом, для любого объекта obj выражение
obj instanceof Object будет истинным (если только вы явно не установите значение его свойства _proto_, чего следует
избегать). С практической точки зрения в этом есть небольшой смысл, поскольку такая возможность позволяет создать ряд
важных методов для всех объектов иерархии.
*/

class Vehicle {}
class Car extends Vehicle{}
class Motorcycle extends Vehicle {}
const car = new Car();
const motorcyle = new Motorcycle();

car instanceof Car; // true
car instanceof Vehicle; // true
motorcyle instanceof Car; // false
motorcyle instanceof Motorcycle; // true
motorcyle instanceof Vehicle; // true

console.log(Vehicle instanceof Object);




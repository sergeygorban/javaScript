/*Рассматривая прототипы, мы уже встречали некий вид наследования: при создании экземпляра класса он наследовал все
функции, находящиеся в прототипе класса. Но на этом дело не заканчивается: если метод не найден в прототипе объекта,
проверяется прототип прототипа. Так получается цепь прототипов. JavaScript будет идти по цепи прототипов, пока не
найдет тот прототип, который удовлетворяет запросу. Если такой прототип не будет найден, то все закончится ошибкой.
*/

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Tpaнcпopтнoe средство создано");
    }

    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Автомобиль создан");
    }

    deployAirbags() {
        console.log("БАБАХ ! ! !");
    }
}

const car = new Vehicle();
car.addPassenger("Cat");
car.addPassenger("Dog");
console.log(car.passengers);

const car1 = new Car();
car1.addPassenger("Cat_1");
car1.addPassenger("Dog_1");
console.log(car1.passengers);

car.deployAirbags(); //Ошибка
car1.deployAirbags();

/*Обратите внимание, что мы можем вызвать метод deployAirbags с car1, но не с vcar1. Другими словами, наследование
работает только в одном направлении. Экземпляры класса Car могут обращаться ко всем методам класса Vehicle, но не
наоборот.*/



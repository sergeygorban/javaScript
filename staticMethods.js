/*Методы, которые мы рассматривали до сих пор, являлись методами экземпляра (instance method). Они предназначены
для работы с конкретным экземпляром. Есть также статические методы (static method) (или методы класса (class method)),
которые не относятся ни к какому конкретному экземпляру. В статическом методе переменная this привязана к самому классу,
но в этом случае вместо нее рекомендуется использовать имя класса.
*/

class Car {

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }

    static areSame (car1, car2) {
        return car1.vin === car2.vin;
    }

    // Создание статического метода
    static getNextVin() {

        //Мы могли бы также использоватьт this.nextVin++, но обращение к Car подчеркивает, что это статический метод
        return Car.nextVin++;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

console.log(Car.areSimilar(car1, car2));
console.log(Car.areSimilar(car2, car3));

console.log(Car.areSame(car2, car3));
console.log(Car.areSame(car2, car2));


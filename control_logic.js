
//Цикл for . . . in - предназначен для перебора свойств объекта по ключам.

const player = {name: 'Thomas', rank: 'Midshipman', age: 25};
for (let prop in player) {
    console.log(prop);
}

/* Цикл for . . . of -  нововведение ES6, обеспечивающее еще один способ циклического перебора элементов коллекции.
Цикл for . . . of применим к массивам и в более общем случае к любым итерируемым (iterable) объектам.
 */

const a = [1, 2, 3, 4, 5, 6];

for (let elem of a) {
    console.log(elem);
}

// Использование "continue" для сокращения содержимого условных выражений

let a1 = 0;
while (a1 < 10) {
    a1 = a1 + 1;

    if (a1 == 10) {
        console.log("End");
    } else {
        console.log("Start");
    }
}

let b = 0;
while (b < 10) {
    b = b + 1;

    if (b == 10) {
        console.log("End");
        continue;
    }
    console.log("Start");
}

//Использование break или return во избежание ненужного вычисления

let b1 = 0;
while (b1 < 20) {
    b1 = b1 + 1;

    if (b1 == 10) break;
    console.log(`End: ${b1}`);
}




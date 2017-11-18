/* В JavaScript есть встроенный объект Error, который удобен для обработки ошибок любого вида (исключений и ожидаемых).
Создавая экземпляр объекта Error, вы можете присвоить ему сообщение об ошибке.
*/


const err = new Error("Ошибка ввода");

function validateEmail(email) {
    return email.match(/@/) ? email: new Error(`Ошибочный Email ${email}`);

}

const email = "cc@ukr.net";
const validatedEmail = validateEmail(email);

if (validatedEmail instanceof Error) {
    console.error(`Ошибка ${validatedEmail.message}`);
} else {
    console.log(`Корректный ${validatedEmail}`);
}

// Обработка исключений, используя try catch --------------------------------------------------------------------------

const email = null;

function validateEmail(email) {
    return email.match(/@/) ? email: new Error(`Ошибочный Email ${email}`);

}

try {
    const validatedEmail = validateEmail(email);

    if (validatedEmail instanceof Error) {
        console.error(`Ошибка: ${validatedEmail.message}`);
    } else {
        console.log(`Корректный email: ${validatedEmail}`);
    }
} catch (err) {

    console.error(`Ошибка: ${err.message}`);
}

// Генерирование собственных ошибок ---------------------------------------------------------------------------------

const amount = 20;

function billPay(amount) {

    if (amount < 100) {
        throw new Error("Мало денег");
    }
}

billPay(amount);

// Обработка исключений, используя try catch finally-------------------------------------------------------------------





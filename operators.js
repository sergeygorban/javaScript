/* Операторы сравнения - Строгое равенство "===" или строгое неравенство "!==". Два значения считаются строго равными,
если они ссылаются на один и тот же объект или имеют один и тот же тип и одно и то же значение (у базовых типов).

Абстрактное равенство "==". Два значения считаются абстрактно равными, если они ссылаются на один и тот
же объект (и то хорошо) или если они могут быть приведены к одному и тому же значению. Именно эта вторая часть вызывает
так много неприятностей и недопонимания. Иногда это свойство полезно. Например, если вы захотите узнать, равны ли число
33 и строка "33" , то оператор абстрактного равенства скажет, что равны, но оператор строгого равенства скажет, что не
равны (поскольку они имеют разные типы).

Оператор typeof - возвращает тип данных

 */

typeof undefined;
typeof null;
typeof {};
typeof true;
typeof 1;
typeof "";
typeof Symbol();
typeof function(){};

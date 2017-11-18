/* WeakMap - это слабые отображения.

Объект WeakМap идентичен объекту Мар, кроме следующего:
        Его ключи должны быть объектами.
        Ключи в WeakМap допускают сборку мусора.
        Объект WeakМap не может быть перебран или очищен.

Обычно JavaScript хранит объект в памяти, пока где-нибудь есть ссылка на него. Например, если у вас будет объект,
который является ключом в Мар, то JavaScript будет хранить этот объект в памяти, пока объект Мар существует. С WeakМap
все не так. Из-за этого объект WeakMap не может быть перебран (есть слишком большая опасность, что при переборе
произойдет доступ к объекту, который уже был уничтожен в процессе сборки мусора). Благодаря этим свойствам объект
WeakMap применяется для хранения закрытых ключей в экземплярах объекта.
*/

const SecretHolder = (function () {

    const secrets = new WeakMap();

    return class {

        setSecret(secret) {
           secrets.set(this, secret);
        }

        getSecret() {
            return secrets.get(this);
        }
    }
    
}) ();

const a = new SecretHolder();
a.setSecret('secret A');
console.log(a.getSecret());

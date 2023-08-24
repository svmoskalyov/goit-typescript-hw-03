/*

Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, 
яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). 
Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і 
зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), 
або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, 
який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати 
абстрактний метод OpenDoor, який приймає об'єкт класу Key.

Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, 
збереженим як key, то двері відчиняються.

*/

class Key {
    private signature: number = Math.random();

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}
    
    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: object[] = [];

    constructor(theKey: Key) {
        this.key = theKey;
    }

    comeIn(person: object) {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(theKey: Key): boolean;
}

class MyHouse extends House {
    openDoor(theKey: Key) {
        if (this.key.getSignature() === theKey.getSignature()) {
            return this.door = true;
        }
        return false;
    }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);


export {};
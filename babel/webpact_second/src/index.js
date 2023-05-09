import "core-js/stable";


class Person {
    set name(value) {
        this._name = value;
    }

    set age(value) {
        this._age = value;
    }


    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    constructor(name,age) {
        this._name = name;
        this._age = age;
    }
}


const p = new Person('xky',19)
console.log(p.name)

var person = {}

person.id = 1

delete person.id;

Object.defineProperty(
    person,
    "id",
    {
        value: 2,
        enumerable: false,
        writable: false,
        configurable: false
    }
);

console.log(person.id);

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log('Woof woof!');
    }
}
const myDog = new Dog('Buddy', 'Labrador');
myDog.sayName();
myDog.bark();   

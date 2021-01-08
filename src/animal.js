class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return `sound...`;
  }
  eat() {
<<<<<<< HEAD:animal.js
    console.log(`${this.name} eats`);
=======
    return `Food`;
>>>>>>> test-animal:src/animal.js
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = "Rax";
  }
<<<<<<< HEAD:animal.js
  sounds() {
    console.log(`Dog barks`);
=======
  sound() {
    return `Barks`;
>>>>>>> test-animal:src/animal.js
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = "Stormy";
  }
<<<<<<< HEAD:animal.js
  sounds() {
    console.log(`Cat meows`);
=======
  sound() {
    return `Meow`;
>>>>>>> test-animal:src/animal.js
  }
}
class Home {
  constructor(){
 this.adoptedPets = [];
  }
  adoptPet(animal) {
    this.adoptedPets.push(animal);
  }
  makeAllSounds() {
<<<<<<< HEAD:animal.js
    for (var i = 0; i < this.adoptedPets.length; i++) {
    this.adoptedPets[i].sounds();
    }
  }
}
=======
    for (var i = 1; i < this.adoptedPets.length; i++) {
     console.log( this.adoptedPets[i].sound())
    }
  }
}

module.exports = { Dog, Cat, Animal, Home };
>>>>>>> test-animal:src/animal.js

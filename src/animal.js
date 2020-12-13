class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return `sound...`;
  }
  eat() {
    return `Food`;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = "Rax";
  }
  sound() {
    return `Barks`;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = "Stormy";
  }
  sound() {
    return `Meow`;
  }
}
class Home {
  constructor() {
    this.adoptedPets = [];
  }
  adoptPet(animal) {
    this.adoptedPets.push(animal);
  }
  makeAllSounds() {
    for (var i = 1; i < this.adoptedPets.length; i++) {
     console.log( this.adoptedPets[i].sound())
    }
  }
}

module.exports = { Dog, Cat, Animal, Home };

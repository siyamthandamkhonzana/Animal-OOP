class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log(`sound...`);
  }
  eat() {
    console.log(`Food`);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = "Rax";
  }
  sounds() {
    console.log(`Barks`);
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = "Stormy";
  }
  sounds() {
    console.log(`Meows`);
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
      this.adoptedPets[i].sounds();
    }
  }
}



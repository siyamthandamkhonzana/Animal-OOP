class Animal{
    constructor(name){
        this.name =name ;
    }
sound(){
    console.log(`sound...`)
}
eat(){
    console.log(`${this.name} eat`)
}
}
class Dog extends Animal{
    constructor(name){
        super(name);
        this.name = "Rax"
    }
    sounds(){
        console.log(`Dog barks`)
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
        this.name = "Stormy"
    }
    sounds(){
        console.log(`Cat meows`)
    }
}
var adoptedPet = [] ;
class Home {
  adoptPet(animal){
  adoptedPet.push(animal)
  }
makeAllSounds(){
    for(var i = 1; i < adoptedPet.length; i++){
        adoptedPet[i].sounds();
    }
}
}

var dog = new Dog();
dog.eat();
dog.sounds();

var cat = new Cat();
cat.eat();
cat.sounds();

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();




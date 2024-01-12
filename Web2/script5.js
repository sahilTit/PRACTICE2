class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created...");
  }
  eats() {
    console.log("kha raha hu..");
  }
  jumps() {
    console.log("kood raha hu..");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("object is created and he is a lion");
  }
  eats() {
    super.eats()
    console.log("kha raha hu.. roar");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("shera");
console.log(l);

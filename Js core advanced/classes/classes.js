class University {
  constructor(name, facultName) {
    this.name = name;
    this[facultName] = facultName;
  }

  addFacult(facultName) {
    this[facultName] = facultName;
  }
  removeFacult(facultName) {
    delete this[facultName];
  }
}

const Grgu = new University("GRGU", "Math");

Grgu.addFacult("Market");
Grgu.removeFacult("Market");
console.log(Grgu);

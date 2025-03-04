export class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.id = Date.now();
  }
}

// const p = new Person("Sebastian", 45, true);

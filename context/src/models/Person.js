export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isMarried = false;
    this.id = Date.now();
  }
}

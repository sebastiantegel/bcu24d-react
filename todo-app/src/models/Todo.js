export class Todo {
  constructor(text) {
    this.id = Date.now();
    this.done = false;
    this.text = text;
  }
}

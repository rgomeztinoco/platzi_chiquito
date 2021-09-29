export default class Course {
  constructor({name, classes}){
    this._name = name
    this.classes = classes
  }

  get name() {
    return this._name
  }

  set name(newName) {
    if (newName.includes("malito")) {
      console.error("Guarda causita")
    } else {
      this._name = newName
    }
  }
}
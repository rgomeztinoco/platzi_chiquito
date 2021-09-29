class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.cursosAprobados = []
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
  }
}

const anita = new Student("anita", 21)
anita.aprobarCurso("Curso de CSS Grid")

console.log(anita)
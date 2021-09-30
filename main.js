import Student from "./components/students/Student.js"
import LearningPaths from "./components/LearningPath.js"
import Course from "./components/Course.js"
import PlatziClass from "./components/PlatziClass.js"

const clase1 = new PlatziClass({
  name: "Como hacer un Objeto en JS",
  videoID: "hsdjfhsdfjksad",
})
clase1.reproducir()
clase1.pausar()

const progBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  classes: []
})

const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [
    progBasica,
    "Curso Definitivo de HTML y CSS",
    "Curso de Responsive Design",
    "Curso de CSS Grid",
  ]
})
const escuelaData = new LearningPaths({
  name: "Escuela de Data Science",
  courses: [
    "Curso Bases de Datos",
    "Curso de Python",
    "Curso de mySQL",
  ]
})
const escuelaVgs = new LearningPaths({
  name: "Escuela de Videojuegos",
  courses: [
    "Curso de Introduccion a la Produccion de Videojuegos",
    "Curso de Unity 3D",
    "Curso de Produccion Sonora Para Videojuegos",
  ]
})

console.log(escuelaWeb)

const anita = new Student({
  name:"anita",
  username: "anita123",
  email: "anita@gmail.com",
  twitter: "anita123",
})
anita.aprobarCurso("Curso de CSS Grid")

console.log(anita)
import Student from "./Student";

export default class FreeStudent extends Student {
  constructor(props) {
    super(props)
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.aprobarCurso(newCourse)
    }
  }
}
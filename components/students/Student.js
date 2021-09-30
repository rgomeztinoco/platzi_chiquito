export default class Student {
  constructor({name, email, username, twitter, instagram, facebook, approvedCourses, learningPaths}) {
    this.name = name
    this.email = email
    this.username = username
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = []
    this.learningPaths = []
  }

  aprobarCurso(nuevoCurso) {
    this.approvedCourses.push(nuevoCurso)
  }
}
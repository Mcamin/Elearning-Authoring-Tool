export default {

  appendCourse: (state, course) => {
     state.courses = course
  },
  createCourse: (state, course) => {
    state.newCourse = course
  },

  appendSection: (state, sectionName) => {
    //let sec = {title: "TESTSECTION"}
    //state.courses.course.sections.push(sec)
  }
}

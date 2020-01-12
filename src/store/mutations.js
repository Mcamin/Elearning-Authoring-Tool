export default {

  appendCourse: (state, course) => {
     state.courses = course
  },
  createCourse: (state, course) => {
    state.newCourse = course
  },

  appendSection: (state, sections) => {
    state.courses.course = sections
    //let sec = {title: "TESTSECTION"}
    //state.courses.course.sections.push(sec)
  },
  appendSectionTitle: (state, secTitle) => {
    //state.courses.course = sections
    //state.courses.course.sections.title = secTitle
    //let sec = {title: "TESTSECTION"}
    //state.courses.course.sections.push(sec)
  }
}

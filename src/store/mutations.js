export default {

  appendCourse: (state, course) => {
     state.courses = course
  },
  createCourse: (state, course) => {
    state.newCourse = course
  },

  appendSection: (state, sectionName) => {
    state.newCourse.sections.push({title: sectionName})
  }
}

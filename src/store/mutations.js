export default {
  appendCourse: (state, course) => {
    state.courses.push(course)
  },
  createCourse: (state, course) => {
    state.newCourse = course
  },


}

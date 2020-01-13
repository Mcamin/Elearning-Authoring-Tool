//Update or mutate a state
import getters from "./getters";

export default {

  createSectionTitle: (state,payload) => {
    let temp = state.course.sections.find(
      section => section.title === payload.oldTitle);
    console.log(temp);
    state.course.sections[state.course.sections.indexOf(temp)].title =payload.newTitle;

  },
  saveCopy: (state, course) => {
    state.course = course;
    // make an api call (post) to save the course details
    // in the database or save them into a local file
},
  appendCourse: (state, course) => {
     state.courses.push(course);
  },
  appendSection: (state, section) => {
    state.course.sections.push(section)
  }
}

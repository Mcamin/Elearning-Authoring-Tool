export default {

// get a course by id
  getSections: (state) => {
    return state.course.sections;
  },
  getCourses: (state) => {
    return state.courses;
  },

  getCourse:(state,id) =>{
    return state.courses.filter(course => course.id=== id)[0];
  },
  getCourseContent:state => id => {
    let course = state.courses.filter(course => course.id=== id)[0];
  console.log(JSON.stringify(state.course));
    let content_kv = Object.entries(course.contentIndex);
    for (let [k, v] of content_kv) {
      if(k.charAt(0)==='s')
      {
        course.content[v]= state.sections.filter(section => section.id=== k)[0];}
      else
        course.content[v]= state.modules.filter(section => section.id=== k)[0];

    }
    return course.content
  },
}

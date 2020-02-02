
let fetchContent= (IndexObject, callback) => {
  // Get Content Index
  let content_kv = Object.entries(IndexObject),
      tempArray = [];
  for (let [key, value] of content_kv) {
    switch (key.charAt(0)){
      case "s":
        let section = callback.getSectionByID(key);
        if(section !== undefined){
          section.modules = fetchContent(section.modulesIndex,callback);
          tempArray[value] = section;
        }
        break;
      case "m":
        let module = callback.getModuleByID(key);
        if(module !== undefined){
          module.content = fetchContent(module.contentIndex,callback);
          tempArray[value] = module;
        }
        break;
      case "l":
        let lesson = callback.getLessonByID(key);
        if(lesson !== undefined){
          tempArray[value] = lesson;
        }
        break;
      case "q":
        let interaction = callback.getInteractionByID(key);
        if(interaction !== undefined){
          tempArray[value] = interaction;
        }
        break;
      case "g":
        let glossary = callback.getGlossaryByID(key);
        if(glossary !== undefined){
          tempArray[value] = glossary;
        }
        break;
    }
  }
  return tempArray;
};

export default {

/* Courses Array Module getters */
  // Get all Courses
  getAllCourses: (state) => {
    return state.courses;
  },
  // Get a Course by ID
  getCourseByID:state => id =>{
    return state.courses.filter(course => course.id=== id)[0];
  },


 /* Section Array Sections getters */

 // get all Sections
  getSections: (state) => {
    return state.sections;
  },

  // Get a Section by ID
  getSectionByID: state => id =>{
    return state.sections.filter(section => section.id=== id)[0];
  },

  /* Module Array Module getters */

  // get all Modules
  getModules: (state) => {
    return state.modules;
  },

  // Get a Module by ID
  getModuleByID: state => id =>{
    return state.modules.filter(section => section.id=== id)[0];
  },


  /* Lessons Array Module getters */

  // get all Sections
  getLessons: (state) => {
    return state.lessons;
  },

  // Get a lesson by ID
  getLessonByID: state => id =>{
    return state.lessons.filter(lesson => lesson.id=== id)[0];
  },

  /* Interactions Array Module getters */

  // get all Interactions
  getInteractions: (state) => {
    return state.interactions;
  },

  // Get an Interaction by ID
  getInteractionByID: state => id  =>{
    return state.interactions.filter(interaction => interaction.id=== id)[0];
  },


  /* Glossaries Array Module getters */

  // get all Glossaries
  getGlossaries: (state) => {
    return state.glossaries;
  },

  // Get a Glossary by ID
  getGlossaryByID: state => id  =>{
    return state.glossaries.filter(glossary => glossary.id=== id)[0];
  },

// Get Course Content
  getCourseContent:(state,getters) => id => {
    let course = getters.getCourseByID(id);
    if(course !== undefined){
      // Get Content Index
      let content_kv = Object.entries(course.contentIndex);
        // Loop over Index Object k,v
      course.content = fetchContent(course.contentIndex,getters);

   return course.content;
    }
  },
}

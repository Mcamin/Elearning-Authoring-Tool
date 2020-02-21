
const CourseMutations = {

  getCourse: (state, course) => {
    state.currentCourse= course;
  },
  getCourses: (state, courses) => {
    state.courses= courses;
  },
  createCourse: (state, newCourse) => {
    state.currentCourse= newCourse;
    state.courses.push(newCourse);
  },
  updateCourse: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteCourse: (state, CourseId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  }

};

const SectionMutations = {
  getSection: (state, section) => {
    state.currentSection= section;
  },
  getSections: (state, courses) => {
    state.sections= courses;
  },
  createSection: (state, newSection) => {
    state.currentSection= newSection;
    state.sections.push(newSection);
  },
  updateSection: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteSection: (state, sectionId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  }
};

const ModuleMutations = {
  getModule: (state, module) => {
    state.currentModule= module;
  },
  getModules: (state, modules) => {
    state.modules= modules;
  },
  createModule: (state, newModule) => {
    state.currentModule= newModule;
    state.modules.push(newModule);
  },
  updateModule: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteModule: (state, moduleId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  }
};

const LessonMutations = {
  getLesson: (state, lesson) => {
    state.currentLesson= lesson;
  },
  getLessons: (state, lessons) => {
    state.lessons= lessons;
  },
  createLesson: (state, newLesson) => {
    state.currentLesson= newLesson;
    state.lessons.push(newLesson);
  },
  updateLesson: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteLesson: (state, lessonId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  }

};

const InteractionMutations = {
  getInteraction: (state, interaction) => {
    state.currentInteraction= interaction;
  },
  getLessons: (state, lessons) => {
    state.lessons= lessons;
  },
  createLesson: (state, newInteraction) => {
    state.currentInteraction= newInteraction;
    state.interactions.push(newInteraction);
  },
  updateInteraction: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteInteraction: (state, interactionId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  }

},
 GlobalMutations = {
  getLanguages: (state, languages) => {
    state.languages= languages;
  },

  getCategories: (state, categories) => {
    state.categories= categories;
  },
};


/*createSectionTitle: (state,payload) => {
  let temp = state.course.sections.find(
    section => section.title === payload.oldTitle);
  state.course.sections[state.course.sections.indexOf(temp)].title =payload.newTitle;*/



export  {
  GlobalMutations,
  InteractionMutations,
  LessonMutations,
  ModuleMutations,
  SectionMutations,
  CourseMutations
}

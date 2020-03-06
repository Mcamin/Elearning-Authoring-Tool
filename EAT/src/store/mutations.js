const CourseMutations = {
  getCourse: (state, course) => {
    state.currentCourse = course;
  },
  getCourses: (state, courses) => {
    state.courses = courses;
  },
  createCourse: (state, newCourse) => {
    state.currentCourse = newCourse;
    state.courses.push(newCourse);
  },
  updateCourse: (state, payload) => {
    //Loop through Payload and update Course Attributes
    const entries = Object.entries(payload.props);
    let newObj = state.currentCourse;
    for (const [key, value] of entries) {
      newObj[key] = value;
    }
    state.currentCourse = {...newObj};
  },
  deleteCourse: (state, courseId) => {
    let
      index = state.courses.findIndex(x => x.uuid === courseId);
    state.courses.splice(index, 1);
  },

  resetCourse: (state) => {
    state.currentCourse = null;
  },
  resetCoursesArray: (state) => {
    state.courses = [];
  },

};

const SectionMutations = {
  getSection: (state, section) => {
    state.sections.push(section);
  },
  getSections: (state, sections) => {
    state.sections = sections;
  },
  setSelectedSection: (state, sectionId) => {
    state.currentSection = state.sections.find(el => {
      return el.uuid === sectionId
    });
  },
  createSection: (state, newSection) => {
    state.sections.push(newSection);
  },
  updateSection: (state, payload) => {
    //Loop through Payload and update Section Attributes
    let foundIndex = state.sections.findIndex(
      el => el.uuid === payload.targetSection),
      newObj = state.sections[foundIndex];

    const entries = Object.entries(payload.props);

    for (const [key, value] of entries) {
      newObj[key] = value;
    }
    state.sections.splice(foundIndex, 1, newObj);


  },
  deleteSection: (state, sectionId) => {
    if (state.currentSection && state.currentSection.uuid === sectionId)
      state.currentSection = null;
    state.sections = state.sections.filter(el => {
      return el.uuid !== sectionId;
    });
  },
  resetSection: (state) => {
    state.currentSection = null;
  },
  resetSectionsArray: (state) => {
    state.sections = [];
  },
};

const ModuleMutations = {
  getModule: (state, _module) => {
    state.modules.push(_module);
  },
  getModules: (state, modules) => {
    state.modules = modules;
  },
  setSelectedModule: (state, moduleId) => {
    state.currentModule = state.modules.find(el => {
      return el.uuid === moduleId
    });
    },
  createModule: (state, newModule) => {
    state.modules.push(newModule);
  },
  updateModule: (state, payload) => {
    //Loop through Payload and update Section Attributes
    let foundIndex = state.modules.findIndex(
      el => el.uuid === payload.targetModule),
      newObj = state.modules[foundIndex];

    const entries = Object.entries(payload.props);

    for (const [key, value] of entries) {
      newObj[key] = value;
    }
    state.modules.splice(foundIndex, 1, newObj);

  },

  deleteModule: (state, moduleId) => {
    if (state.currentModule && state.currentModule.uuid === moduleId)
      state.currentModule = null;
    state.modules = state.modules.filter(el => {
      return el.uuid !== moduleId;
    });
  },

  resetModule: (state) => {
    state.currentModule = null;
  },
  resetModulesArray: (state) => {
    state.modules = [];
  },
};

const LessonMutations = {
  getLesson: (state, lesson) => {
    state.lessons.push(lesson);
  },
  getLessons: (state, lessons) => {
    state.lessons = lessons;
  },
  createLesson: (state, newLesson) => {
    state.currentLesson = newLesson;
    state.lessons.push(newLesson);
  },
  setSelectedLesson: (state, lessonId) => {
    state.currentLesson = state.lessons.find(el => {
      return el.uuid === lessonId
    });
  },
  updateLesson: (state, payload) => {
    //Loop through Payload and update lesson Attributes
    let foundIndex = state.lessons.findIndex(
      el => el.uuid === payload.targetLesson),
      newObj = state.lessons[foundIndex];

    const entries = Object.entries(payload.props);

    for (const [key, value] of entries) {
      newObj[key] = value;
    }
    state.lessons.splice(foundIndex, 1, newObj);
    state.currentLesson = newObj;
  },
  deleteLesson: (state, lessonId) => {
    if (state.currentLesson && state.currentLesson.uuid === lessonId)
      state.currentLesson = null;
    state.lessons = state.lessons.filter(el => {
      return el.uuid !== lessonId;
    });
  },
  resetLesson: (state) => {
    state.currentLesson = null;
  },
  resetLessonsArray: (state) => {
    state.lessons = [];
  },

};

const InteractionMutations = {
    getInteraction: (state, interaction) => {
      state.interactions.push(interaction);
    },
    getInteractions: (state, interactions) => {
      state.interactions = interactions;
    },
    setSelectedInteraction: (state, interactionId) => {
      state.currentInteraction = state.interactions.find(el => {
        return el.uuid === interactionId
      });
    },
    createInteraction: (state, newInteraction) => {
      state.currentInteraction = newInteraction;
      state.interactions.push(newInteraction);
    },
    updateInteraction: (state, payload) => {
      //Loop through Payload and update interaction Attributes
      let foundIndex = state.interactions.findIndex(
        el => el.uuid === payload.targetInteraction),
        newObj = state.interactions[foundIndex];

      const entries = Object.entries(payload.props);

      for (const [key, value] of entries) {
        newObj[key] = value;
      }
      state.interactions.splice(foundIndex, 1, newObj);
      state.currentInteraction = newObj;
    },

    deleteInteraction: (state, interactionId) => {
      if (state.currentInteraction && state.currentInteraction.uuid === interactionId)
        state.currentInteraction = null;
      state.interactions = state.interactions.filter(el => {
        return el.uuid !== interactionId;
      });
    },

    resetInteraction: (state) => {
      state.currentInteraction = null;
    },
    resetInteractionsArray: (state) => {
      state.interactions = [];
    },

  },
  GlobalMutations = {
    getLanguages: (state, languages) => {
      state.languages = languages;
    },

    getCategories: (state, categories) => {
      state.categories = categories;
    },
  };


/*createSectionTitle: (state,payload) => {
  let temp = state.course.sections.find(
    section => section.title === payload.oldTitle);
  state.course.sections[state.course.sections.indexOf(temp)].title =payload.newTitle;*/


export {
  GlobalMutations,
  InteractionMutations,
  LessonMutations,
  ModuleMutations,
  SectionMutations,
  CourseMutations
}

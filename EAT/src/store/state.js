

const CourseState = {
  currentCourse: null,
  courses: [],
},
  SectionState = {
  currentSection: null,
  sections: []
},
  ModuleState = {
    currentModule: null,
    modules:[]
  },
  LessonState = {
    currentLesson: null,
    lessons:[]
  },
  InteractionState = {
    currentInteraction: null,
    interactions:[]
  },

  // Global State
  GlobalState ={
    languages : [],
    // Course Categories
    categories : []
  };





export  {
  GlobalState,
  CourseState,
  SectionState,
  ModuleState,
  LessonState,
  InteractionState,
}

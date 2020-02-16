import courses from '@/data/courses';
import sections from "@/data/sections";
import modules from "@/data/modules";
import lessons from "@/data/lessons";
import glossaries from "@/data/glossaries"
import interactions from "@/data/interaction";

const CourseState = {
  currentCourse: null,
  courses: []
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
    currentModule: null,
    modules:[]
  },
  InteractionState = {
    currentInteraction: null,
    Interactions:[]
  };



export  {
  CourseState,
  SectionState,
  ModuleState,
  LessonState,
  InteractionState,

  /*TO Delete */
 /* course:{
  },
  courses,
  sections,
  interactions,
  modules,
  lessons,
  glossaries,
  //The Object to use to manipulate a lesson
  selectedLesson:{title:"Selected Lesson", content:"",metadata:""},
  selectedCourse:{title:"Selected Course", content: [],metadata:""}*/
}

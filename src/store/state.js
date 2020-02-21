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

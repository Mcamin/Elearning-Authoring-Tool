import courses from '../data/courses';
import sections from "../data/sections";
import modules from "../data/modules";
import lessons from "../data/lessons";
import glossaries from "../data/glossaries"
import interactions from "../data/quizzes";
export default {
  course:{
  },
  courses,
  sections,
  interactions,
  modules,
  lessons,
  glossaries,
  //The Object to use to manipulate a lesson
  selectedLesson:{title:"Selected Lesson", content:"",metadata:""},
  selectedCourse:{title:"Selected Course", content: [],metadata:""}
}

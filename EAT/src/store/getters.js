//helper function
import {dynamicSort} from '@/utils/helpers'

const CourseGetters = {
  // Get all Courses
  getAllCourses: state => {
    return state.courses;
  },
  // Get a Course by ID
  getCourseByID: state => id =>{
    return state.courses.find(course => course.uuid=== id);
  },
    // Get Course Content
    getCourseContent:(state,getters,rootState,rootGetters ) => {
      let contentArray = [];

       const keys = Object.keys(state.currentCourse.contentIndex);
      if(rootState.section.sections.length >0 )  {
       for( const key in keys)

       {
         if(keys[key].charAt(0)==='s')
         { let elm =  rootGetters['section/getSectionByID'](keys[key]);

           contentArray[key] = elm;
         }
         else
         {   let elm =  rootGetters['module/getModuleByID'](keys[key]);

           contentArray[key] = elm;
         }
       }

     }
      if(!contentArray.includes(undefined))
      return contentArray;
      else return []
    }
    ,

  // Get the courses by a category
  getCoursesByCategory: state => category =>{
    return state.courses.filter(course => course.category=== category);
  },

  ascendingCoursesSort: state => {
    return state.courses.sort(dynamicSort("title"));
  },

  descendingCoursesSort: state => {
    return state.courses.sort(dynamicSort("-title"));
  },

    // Get Course Content
    fetchContent: (state,getters) => (IndexObject) => {
      // Get Content Index
      let content_kv = Object.entries(IndexObject),
        tempArray = [];
      for (let [key, value] of content_kv) {
        switch (key.charAt(0)){
          case "s":
            let section = getters.getSectionByID(key);
            if(section !== undefined){
              if(section.modulesIndex)
                section.modules = getters.fetchContent(section.modulesIndex);
              tempArray[value] = section;
            }
            break;
          case "m":
            let module = getters.getModuleByID(key);
            if(module !== undefined){
              if(module.contentIndex)
                module.content = getters.fetchContent(module.contentIndex);
              tempArray[value] = module;
            }
            break;
          case "l":
            let lesson = getters.getLessonByID(key);
            if(lesson !== undefined){
              tempArray[value] = lesson;
            }
            break;
          case "i":
            let interaction = getters.getInteractionByID(key);
            if(interaction !== undefined){
              tempArray[value] = interaction;
            }
            break;
        }
      }
      return tempArray;
    },
},

  SectionGetters = {
    // get all Sections
    getSections: (state) => {
      return state.sections;
    },

    // Get a Section by ID
    getSectionByID: state => uuid =>{
      return state.sections.find(section => section.uuid=== uuid);
    },
    getSectionContent:(state,getters,rootState,rootGetters ) =>uuid => {
      let contentArray = [];
       if(uuid.charAt(0)==='s')
       {
         const keys = Object.keys(state.sections.find(el =>  el.uuid === uuid).modulesIndex);
        for( const key in keys)
        {contentArray[key] = rootGetters['module/getModuleByID'](keys[key]);
          }
       }
      if(!contentArray.includes(undefined))
        return contentArray;
      else return [];
    }
  },

  ModuleGetters = {
    /* Module Array Module getters */

    // get all Modules
    getModules: (state) => {
      return state.modules;
    },

    // Get a Module by ID
    getModuleByID: state => uuid =>{
      return state.modules.find(module => module.uuid=== uuid);
    },
  },

  LessonGetters = {
    /* Lessons Array Module getters */

    // get all Sections
    getLessons: (state) => {
      return state.lessons;
    },

    // Get a lesson by ID
    getLessonByID: state => id =>{
      return state.lessons.find(lesson => lesson.id=== id);
    },

  },

  InteractionGetters = {
    /* Interactions Array Module getters */

    // get all Interactions
    getInteractions: (state) => {
      return state.interactions;
    },

    // Get an Interaction by ID
    getInteractionByID: state => id  =>{
      return state.interactions.find(interaction => interaction.id=== id);
    },
  };


export  {
  CourseGetters,
  SectionGetters,
  ModuleGetters,
  LessonGetters,
  InteractionGetters,

}

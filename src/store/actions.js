import RepositoryFactory from "@/api"
import languages from "@/config/languages"
import categories from "@/config/categories"

const CourseRepository = RepositoryFactory.get('course');
const SectionRepository = RepositoryFactory.get('section');
const ModuleRepository = RepositoryFactory.get('module');
const LessonRepository = RepositoryFactory.get('lesson');
const InteractionRepository = RepositoryFactory.get('interaction');

const CourseActions = {
    loadCourse:
      async ({commit}, CourseID) => {
        await CourseRepository
          .get(CourseID)
          .then(response => {
            commit('getCourse', response.data.course)
          })
          .catch(error => {
            console.log(error)
          })
      },
    loadCourses:
      async ({commit}) => {
        await CourseRepository
          .getAll()
          .then(response => {
            // console.log(JSON.stringify(response));
            commit('getCourses', response.data.courses);
          })
          .catch(error => {
            console.log(error)

          })
      },
    createCourse:
      async ({commit}, newCourse) => {
        await CourseRepository
          .createCourse(newCourse)
          .then((response) => {
            commit('createCourse', newCourse)
          })
          .catch(error => {
            console.log(error)
          })
      },
    updateCourse:
      async ({commit}, payload) => {
        CourseRepository
          .updateCourse(payload)
          .then((response) => {
            commit('updateCourse', payload)
          })
          .catch(error => {
            console.log(error)
          })
      },
    deleteCourse:
      async ({commit}, CourseID) => {
        CourseRepository
          .deleteCourse(CourseID)
          .then((response) => {
            commit('deleteCourse', CourseID)
          })
          .catch(error => {
            console.log(error)
          })
      },
    resetCourse:
      ({commit,dispatch}) => {
        commit('resetCourse');
        dispatch('section/resetSectionsArray', null, { root: true });
        dispatch('module/resetModulesArray', null, { root: true });
        dispatch('interaction/resetInteractionsArray', null, { root: true });
        dispatch('lesson/resetLessonsArray', null, { root: true });
        //TODO: reset current elements also
      },
    resetCoursesArray:
      ({commit}) => {
        commit('resetCoursesArray')
      },

  },

  SectionActions = {
    loadSection:
      async ({commit}, sectionID) => {
        await SectionRepository
          .get(sectionID)
          .then(response => {
            commit('getSection', response.data.section)
          })
          .catch(error => {
            console.log(error)
          })
      },
    loadSections:
      async ({commit}) => {
        await SectionRepository
          .getAll()
          .then(response => {
            commit('getSections', response.data.sections)
          })
          .catch(error => {
            console.log(error)
          })
      },
    createSection:
      async ({commit}, newSection) => {
        await SectionRepository
          .createSection(newSection)
          .then((response) => {
            commit('createSection', newSection)
          })
          .catch(error => {
            console.log(error)
          })
      },
    updateSection:
      async ({commit}, payload) => {
        SectionRepository
          .updateSection(payload)
          .then((response) => {
            commit('updateSection', payload)
          })
          .catch(error => {
            console.log(error)
          })
      },
    deleteSection:
      async ({commit}, sectionID) => {
        await SectionRepository
          .deleteSection(sectionID)
          .then((response) => {
            commit('deleteSection', sectionID)
          })
          .catch(error => {
            console.log(error)
          })
      },
    resetSection:
      ({commit}) => {
        commit('resetSection')
      },
    resetSectionsArray:
      ({commit}) => {
        commit('resetSectionsArray')
      },


  },

  ModuleActions = {
    loadModule:
      async ({commit}, moduleID) => {
        await ModuleRepository
          .get(moduleID)
          .then(response => {
            commit('getModule', response.data.module)
          })
          .catch(error => {
            console.log(error)
          })
      },
    loadModules:
      async ({commit}) => {
        await ModuleRepository
          .getAll()
          .then(response => {
            commit('getModules', response.data.modules)
          })
          .catch(error => {
            console.log(error)
          })
      },
    createModule:
      async ({commit}, newModule) => {
        await ModuleRepository
          .createModule(newModule)
          .then((response) => {
            commit('createModule', newModule)
          })
          .catch(error => {
            console.log(error)
          })
      },
    updateModule:
      async ({commit}, payload) => {
        await ModuleRepository
          .updateModule(payload)
          .then((response) => {
            commit('updateModule', payload)
          })
          .catch(error => {
            console.log(error)
          })
      },
    deleteModule:
      async ({commit}, moduleID) => {
        await ModuleRepository
          .deleteModule(moduleID)
          .then((response) => {
            commit('deleteModule', moduleID)
          })
          .catch(error => {
            console.log(error)
          })
      },
    resetModule:
      ({commit}) => {
        commit('resetModule')
      },
    resetModulesArray:
      ({commit}) => {
        commit('resetModulesArray')
      },

  },

  LessonActions = {
    loadLesson:
      async ({commit}, lessonID) => {
        await LessonRepository
          .get(lessonID)
          .then(response => {
            commit('getLesson', response.data.lesson)
          })
          .catch(error => {
            console.log(error)
          })
      },
    loadLessons:
      async ({commit}) => {
        await LessonRepository
          .getAll()
          .then(response => {
            commit('getLessons', response.data.lessons)
          })
          .catch(error => {
            console.log(error)
          })
      },
    createLesson:
      async ({commit}, newLesson) => {
        await LessonRepository
          .createLesson(newLesson)
          .then((response) => {
            commit('createLesson', newLesson)
          })
          .catch(error => {
            console.log(error)
          })
      },
    updateLesson:
      async ({commit}, payload) => {
        await LessonRepository
          .updateLesson(payload)
          .then((response) => {
            commit('updateLesson', payload)
          })
          .catch(error => {
            console.log(error)
          })
      },
    deleteLesson:
      async ({commit}, lessonID) => {
        await LessonRepository
          .deleteLesson(lessonID)
          .then((response) => {
            commit('deleteLesson', lessonID)
          })
          .catch(error => {
            console.log(error)
          })
      },
    resetLesson:
      ({commit}) => {
        commit('resetLesson')
      },
    resetLessonsArray:
      ({commit}) => {
        commit('resetLessonsArray')
      },


  },

  InteractionActions = {
    loadInteraction:
      async ({commit}, interactionID) => {
        await InteractionRepository
          .get(interactionID)
          .then(response => {
            commit('getInteraction', response.data.interaction)
          })
          .catch(error => {
            console.log(error)
          })
      },
    loadInteractions:
      async ({commit}) => {
        await InteractionRepository
          .getAll()
          .then(response => {
            commit('getInteractions', response.data.interactions)
          })
          .catch(error => {
            console.log(error)
          })
      },
    createInteraction:
      async ({commit}, newInteraction) => {
        await InteractionRepository
          .createInteraction(newInteraction)
          .then((response) => {
            commit('createInteraction', newInteraction)
          })
          .catch(error => {
            console.log(error)
          })
      },
    updateInteraction:
      async ({commit}, payload) => {
        await InteractionRepository
          .updateInteraction(payload)
          .then((response) => {
            commit('updateInteraction', payload)
          })
          .catch(error => {
            console.log(error)
          })
      },
    deleteInteraction:
      async ({commit}, interactionID) => {
        await InteractionRepository
          .deleteInteraction(interactionID)
          .then((response) => {
            commit('deleteInteraction', interactionID)
          })
          .catch(error => {
            console.log(error)
          })
      },
    resetInteraction:
      ({commit}) => {
        commit('resetInteraction')
      },
    resetInteractionsArray:
      ({commit}) => {
        commit('resetInteractionsArray')
      },


  },

  GlobalActions = {
    loadCategories:
      ({commit}) => {
        commit('getCategories', categories);
      },
    loadLanguages:
      ({commit}) => {
        const keys = Object.entries(languages),
          languagesArray = keys.map(el => {
            return el[1].name;
          });
        commit('getLanguages', languagesArray);
      },
  };

export {
  GlobalActions,
  CourseActions,
  SectionActions,
  ModuleActions,
  LessonActions,
  InteractionActions,

}


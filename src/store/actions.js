import RepositoryFactory from "@/api"
const CourseRepository = RepositoryFactory.get('course');
const SectionRepository = RepositoryFactory.get('section');
const ModuleRepository = RepositoryFactory.get('module');
const LessonRepository = RepositoryFactory.get('lesson');
const InteractionRepository = RepositoryFactory.get('interaction');

const CourseActions = {
  loadCourse:
    async ({commit}, CourseID) => {
      CourseRepository
      .get(CourseID)
      .then(data => {
        commit('getCourse', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  loadCourses:
    async ({commit}) => {
      CourseRepository
      .getAll()
      .then(data => {
        commit('getCourses', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  createCourse:
    async ({commit},newCourse) => {
      CourseRepository
      .createLesson(newCourse)
      .then((response) => {
        commit('createCourse', newCourse)
      })
      .catch(error => {
        console.log(error)
      })
    },
  updateCourse:
    async ({commit},payload) => {
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
    async ({commit},CourseID) => {
      CourseRepository
      .deleteCourse(CourseID)
      .then((response) => {
        commit('deleteCourse', CourseID)
      })
      .catch(error => {
        console.log(error)
      })
    },


};

const SectionActions = {
  loadSection:
    async ({commit}, sectionID) => {
      SectionRepository
      .get(sectionID)
      .then(data => {
        commit('getSection', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  loadSections:
    async ({commit}) => {
      SectionRepository
      .getAll()
      .then(data => {
        commit('getSections', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  createSection:
    async ({commit},newSection) => {
      SectionRepository
      .createSection(newSection)
      .then((response) => {
        commit('createSection', newSection)
      })
      .catch(error => {
        console.log(error)
      })
    },
  updateSection:
    async ({commit},payload) => {
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
    async ({commit},sectionID) => {
      SectionRepository
      .deleteSection(sectionID)
      .then((response) => {
        commit('deleteSection', sectionID)
      })
      .catch(error => {
        console.log(error)
      })
    },


};

const ModuleActions = {
  loadModule:
    async ({commit}, moduleID) => {
      ModuleRepository
      .get(moduleID)
      .then(data => {
        commit('getModule', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  loadModules:
    async ({commit}) => {
      ModuleRepository
      .getAll()
      .then(data => {
        commit('getModules', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  createModule:
    async ({commit},newModule) => {
      ModuleRepository
      .createModule(newModule)
      .then((response) => {
        commit('createModule', newModule)
      })
      .catch(error => {
        console.log(error)
      })
    },
  updateModule:
    async ({commit},payload) => {
      ModuleRepository
      .updateModule(payload)
      .then((response) => {
        commit('updateModule', payload)
      })
      .catch(error => {
        console.log(error)
      })
    },
  deleteModule:
    async ({commit},moduleID) => {
      ModuleRepository
      .deleteModule(moduleID)
      .then((response) => {
        commit('deleteModule', moduleID)
      })
      .catch(error => {
        console.log(error)
      })
    },


};

const LessonActions = {
  loadLesson:
    async ({commit}, lessonID) => {
      LessonRepository
      .get(lessonID)
      .then(data => {
        commit('getLesson', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  loadLessons:
    async ({commit}) => {
      LessonRepository
      .getAll()
      .then(data => {
        commit('getLessons', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  createLesson:
    async ({commit},newLesson) => {
      LessonRepository
      .createLesson(newLesson)
      .then((response) => {
        commit('createLesson', newLesson)
      })
      .catch(error => {
        console.log(error)
      })
    },
  updateLesson:
    async ({commit},payload) => {
      LessonRepository
      .updateLesson(payload)
      .then((response) => {
        commit('updateLesson', payload)
      })
      .catch(error => {
        console.log(error)
      })
    },
  deleteLesson:
    async ({commit},lessonID) => {
      LessonRepository
      .deleteLesson(lessonID)
      .then((response) => {
        commit('deleteLesson', lessonID)
      })
      .catch(error => {
        console.log(error)
      })
    },


};

const InteractionActions = {
  loadInteraction:
    async ({commit}, interactionID) => {
      InteractionRepository
      .get(interactionID)
      .then(data => {
        commit('getInteraction', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  loadInteractions:
    async ({commit}) => {
      InteractionRepository
      .getAll()
      .then(data => {
        commit('getInteractions', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
  createInteraction:
    async ({commit},newInteraction) => {
      InteractionRepository
      .createInteraction(newInteraction)
      .then((response) => {
        commit('createInteraction', newInteraction)
      })
      .catch(error => {
        console.log(error)
      })
    },
  updateInteraction:
    async ({commit},payload) => {
      InteractionRepository
      .updateInteraction(payload)
      .then((response) => {
        commit('updateInteraction', payload)
      })
      .catch(error => {
        console.log(error)
      })
    },
  deleteInteraction:
    async ({commit},interactionID) => {
      InteractionRepository
      .deleteInteraction(interactionID)
      .then((response) => {
        commit('deleteInteraction', interactionID)
      })
      .catch(error => {
        console.log(error)
      })
    },


};



export  {
  CourseActions,
  SectionActions,
  ModuleActions,
  LessonActions,
  InteractionActions,

}


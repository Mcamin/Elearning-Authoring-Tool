import RepositoryFactory from "@/api"

const LessonRepository = RepositoryFactory.get('lesson');

const lessonActions = {
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




export default {




  // Save course while still editing
  saveTemporaryCourse: ({commit}, course) => {
    commit('saveCopy', course)
  },

  updateSectionTitle: ({commit}, secTitle) => {
    commit('createSectionTitle', secTitle)
  },

  resetCartState({commit}) {
    commit('resetState')
  },

  addCourse: ({commit}, payload) => {
    commit('appendCourse', payload)
  },

  addSection: ({commit}, payload) => {
    commit('appendSection', payload)
  },
  saveLesson: ({commit}, payload) => {
    commit('appendLesson', payload)
  },

  addSectionTitle: ({commit}, secTitle) => {
    commit('appendSectionTitle', secTitle)
  }

}


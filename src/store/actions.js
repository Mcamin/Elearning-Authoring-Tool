export default {
  // Save course while still editing
  saveTemporaryCourse: ({commit}, course) => {
   commit('saveCopy', course)
  },

  updateSectionTitle: ({commit}, secTitle) => {
    commit('createSectionTitle', secTitle)
  },

  resetCartState ({ commit }) {
    commit('resetState')
  },

  addCourse: ({ commit }, payload) => {
    commit('appendCourse', payload)
  },
  addSection: ({commit}, section) => {
    commit('appendSection' +
      '', section)
  },
}

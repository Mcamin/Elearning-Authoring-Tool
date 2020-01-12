export default {
  resetCartState ({ commit }) {
    commit('resetState')
  },

  addCourse: ({ commit }, payload) => {
    commit('appendCourse', payload)
  },

  addSection: ({ commit }, payload) => {
    commit('appendSection', payload)
  },

  addSectionTitle: ({ commit }, secTitle) => {
    commit('appendSectionTitle', secTitle)
  }
}


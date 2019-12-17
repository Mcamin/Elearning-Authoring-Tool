export default {
  resetCartState ({ commit }) {
    commit('resetState')
  },

  addCourse: ({ commit }, payload) => {
    commit('appendCourse', payload)
  }
}

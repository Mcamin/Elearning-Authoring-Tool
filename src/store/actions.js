export default {
  addCourse: ({ commit }, payload) => {
    commit('appendCourse', payload)
  }
}

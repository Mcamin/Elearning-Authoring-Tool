import axios from "axios";


export default {

  /*API Calls*/
  loadSections: ({commit}) =>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(obj =>{
      commit('saveCopy', obj)
    }).catch(error =>{console.log(error)})
  },



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

  addSection: ({ commit }, payload) => {
    commit('appendSection', payload)
  },
  saveLesson: ({ commit }, payload) => {
    commit('appendLesson', payload)
  },

  addSectionTitle: ({ commit }, secTitle) => {
    commit('appendSectionTitle', secTitle)
  }

}


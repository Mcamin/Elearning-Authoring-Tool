import Vue from 'vue'
import Vuex from 'vuex'

import {CourseState,InteractionState,SectionState,ModuleState,LessonState} from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex);
const
  moduleCourse = {
    state: CourseState,
    mutations: {},
    actions: {}
  },
  moduleSection = {
    state: SectionState,
    mutations: {},
    actions: {}
  },
  moduleModule = {
    state: ModuleState,
    mutations: {},
    actions: {}
  },
  moduleLesson = {
    state: LessonState,
    mutations: {},
    actions: {}
  },
  moduleInteraction = {
    state: InteractionState,
    mutations: {},
    actions: {}
  };
export default new Vuex.Store({

  modules: {
    course: moduleCourse,
    section: moduleSection,
    module: moduleModule,
    lesson: moduleLesson,
    interaction: moduleInteraction

  }
  /*
  store.state.a
  store.state.b

  state,
  mutations,
  actions,
  getters*/
})

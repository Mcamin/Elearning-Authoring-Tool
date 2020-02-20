import Vue from 'vue'
import Vuex from 'vuex'

import {CourseState,InteractionState,SectionState,ModuleState,LessonState} from './state'
import  {CourseMutations,InteractionMutations,SectionMutations,ModuleMutations,LessonMutations} from './mutations'
import  {CourseActions,InteractionActions,SectionActions,ModuleActions,LessonActions}  from './actions'
import {CourseGetters,InteractionGetters,SectionGetters,ModuleGetters,LessonGetters} from './getters'


Vue.use(Vuex);
const
  moduleCourse = {
    namespaced:true,
    state: CourseState,
    actions: CourseActions,
    mutations: CourseMutations,
    getters: CourseGetters
  },
  moduleSection = {
    namespaced:true,
    state: SectionState,
    actions: SectionActions,
    mutations: SectionMutations,
    getters: SectionGetters

  },
  moduleModule = {
    namespaced:true,
    state: ModuleState,
    actions: ModuleActions,
    mutations: ModuleMutations,
    getters: ModuleGetters
  },
  moduleLesson = {
    namespaced:true,
    state: LessonState,
    actions: LessonActions,
    mutations: LessonMutations,
    getters: LessonGetters

  },
  moduleInteraction = {
    namespaced:true,
    state: InteractionState,
    actions: InteractionActions,
    mutations: InteractionMutations,
    getters: InteractionGetters
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

import Vue from 'vue'
import Vuex from 'vuex'

import {CourseState,InteractionState,SectionState,ModuleState,LessonState,GlobalState} from './state'
import  {CourseMutations,InteractionMutations,SectionMutations,ModuleMutations,LessonMutations,GlobalMutations} from './mutations'
import {CourseActions, InteractionActions, SectionActions, ModuleActions, LessonActions, GlobalActions} from './actions'
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

  },
  state: GlobalState,
  mutations: GlobalMutations,
  actions: GlobalActions
  /*
  store.state.a
  store.state.b


  actions,
  getters*/
})

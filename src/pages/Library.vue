<template>
  <b-container fluid class="p-5 my-2">
  <FilterElement/>
    <b-row  align-h="center"   align-content="center">
      <b-col  align="center" align-self="center" >

        <template v-for="elm in filteredElements" >
          <Accordion :accordion-i-d="elm.uuid" :accordion-title="elm.title"/>
        </template>
        </b-col>


    </b-row>
  </b-container>
</template>

<script>
  import Accordion from "../components/Accordions/Accordion";
  import FilterElement from "../layout/WrapperElements/FilterElement"
  import {mapActions, mapState} from "vuex";
  import {bus} from "../main";


  export default {
        name: "Library",
        components: {Accordion,FilterElement},
        data(){
            return {
               index: 0
            }
        },
        computed:{
          ...mapState('section', ['sections']),
          ...mapState('module', ['modules']),
          ...mapState('lesson', ['lessons']),
          ...mapState('interaction', ['interactions']),
            filteredElements(){
                switch (this.index) {
                    //Load Lessons
                    case '1':
                        return this.lessons;
                        break;
                    //Load Interactions
                    case '2':
                        return this.interactions;
                        break;
                    case '3':
                        return this.modules;
                        break;
                    case '4':
                        return this.sections;
                        break;
                    default:
                        return  this.lessons;
                }
            }

        },
    methods:{
      ...mapActions('section', {loadSections: 'loadSections',resetSectionsArray:'resetSectionsArray'}),
      ...mapActions('module', {loadModules: 'loadModules',resetModulesArray:'resetModulesArray'}),
      ...mapActions('lesson', {loadLessons: 'loadLessons',resetLessonsArray:'resetLessonsArray'}),
      ...mapActions('interaction', {loadInteractions: 'loadInteractions',resetInteractionsArray:'resetInteractionsArray'})
    },
    mounted(){
      /*this.$store.dispatch('loadSections') ;*/
    },
    created() {
          this.resetSectionsArray();
          this.resetModulesArray();
          this.resetLessonsArray();
          this.resetLessonsArray();
          this.loadSections();
          this.loadModules();
          this.loadLessons();
          this.loadInteractions();
      bus.$on('render-lib-content', (key) => {
        this.index = key;
      });
    },
    }
</script>

<style scoped>

</style>

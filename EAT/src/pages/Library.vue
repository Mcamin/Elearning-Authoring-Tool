<template>
  <b-container fluid class="p-5 my-2">
  <FilterElement/>
    <b-row  align-h="center"   align-content="center">
      <b-col  align="center" align-self="center" >

        <template v-for="(elm,index) in filteredElements" >
          <Accordion v-if="elm.type==='Section' || elm.type=== 'Module'" :element="elm" :key="index"/>
          <ContentAccordion v-else :element="elm"></ContentAccordion>
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
  import ContentAccordion from "@/components/Accordions/ContentAccordion";


  export default {
        name: "Library",
        components: {ContentAccordion, Accordion,FilterElement},
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
                    //Load Interactions
                    case '2':
                        return this.interactions;
                    case '3':
                        return this.modules;
                    case '4':
                        return this.sections;
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

<

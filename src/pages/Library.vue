<template>
  <b-container fluid class="p-5 my-2">
  <FilterElement/>
    <b-row  align-h="center"   align-content="center">
      <b-col  align="center" align-self="center" >

        <template v-for="elm in filteredElements" >
          <Accordion :accordion-i-d="elm.id" :accordion-title="elm.title"/>
        </template>
        </b-col>


    </b-row>
  </b-container>
</template>

<script>
  import Accordion from "../components/Accordions/Accordion";
  import FilterElement from "../layout/WrapperElements/FilterElement"
  import {mapState} from "vuex";
  import {bus} from "../main";

  export default {
        name: "Library",
        components: {Accordion,FilterElement},
        data(){
            return {
               index: 0
            }
        },
        created() {
            bus.$on('render-lib-content', (key) => {
                     this.index = key;
            });
        },
      mounted(){
        /*this.$store.dispatch('loadSections') ;*/
      },
        computed:{
            ...mapState([
                'sections',
                'modules',
                'glossaries',
                'interactions',
                'lessons',
            ]),
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

        }

    }
</script>

<style scoped>

</style>

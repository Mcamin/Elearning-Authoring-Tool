<template>
  <b-container fluid class="p-5 my-2">
  <FilterElement/>
    <b-row  align-h="center"   align-content="center">
      <b-col  align="center" align-self="center" >

        <template v-for="elm in elements" >
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
  import lessons from "../data/lessons";
  import quizzes from "../data/quizzes";
  import sections from "../data/sections";
  import {bus} from "../main";

  export default {
        name: "Library",
        components: {Accordion,FilterElement},
        data(){
            return {
                elements:lessons
            }
        },
        created() {

            bus.$on('render-lib-content', (key) => {
                switch (key) {

                    //Load Lessons
                    case '1':
                        this.elements=this.lessons;
                        break;
                    //Load Interactions
                    case '2':
                        console.log(1);
                        this.elements=this.quizzes;
                        break;
                    case '3':
                        this.elements=this.modules;
                        break;
                    case '4':
                        this.elements=this.sections;
                        break;

                }
            });
        },
        computed:{
            ...mapState([
                'sections',
                'modules',
                'glossaries',
                'quizzes',
                'lessons',
            ])

        }

    }
</script>

<style scoped>

</style>

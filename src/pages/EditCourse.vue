<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container fluid class="p-5 my-2" >
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->

       <template v-for="content in sections">

           <!--Render Section  -->
          <component v-if="isSection(content.uuid)" is="Accordion" :accordionTitle="content.title"
                     :accordionID="content.uuid" :contentArray="[]"/>

         <!--Render Module  -->
         <component v-else is="Accordion" :accordionTitle="content.title"
                    :accordionID="content.id" :contentArray="content.content"/>


        </template>


        <AddBtn caller-i-d="parent"/>
        <!--End  Add  course Accordion-->
        <!-- Add  content  Accordion-->
        <AddModal :callerId="this.callerID"/>
        <!-- End  Add Content Accordion-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import Accordion from "../components/Accordions/Accordion";
  import AddModal from "../components/Modals/AddModal";
  import AddBtn from "../components/Buttons/AddBtn";
  import {mapActions,mapState} from "vuex";
  import {bus} from "../main";
  import {uuid} from "vue-uuid";

  export default {
    name: "EditCourse",
    data(){
      return {
        callerID:"parent",
      }
    },
    components: {
      Accordion,
      AddModal,
      AddBtn
    },
    computed: {
      ...mapState('course', ['currentCourse']),
      ...mapState('section', ['currentSection','sections']),
      ...mapState('module', ['currentModule','modules']),
      ...mapState('lesson', ['lessons']),
      ...mapState('interaction', ['interactions']),
    },
      methods:{
        ...mapActions('course', {loadCourse: 'loadCourse',updateCourse:'updateCourse'}),
        ...mapActions('section', {loadSection: 'loadSection',createSection:'createSection'}),
        ...mapActions('module', {loadModule: 'loadModule'}),
        ...mapActions('lesson', {loadLesson: 'loadLesson'}),
        ...mapActions('interaction', {loadInteraction: 'loadInteraction'}),

         async generateCourseContent(){
          // Create a new section and add it to course if course is new


          if (Object.entries(this.currentCourse.contentIndex).length  === 0)
          {let sec_id =  uuid.v1(),
              newSection = {
            uuid: 's-'+sec_id,
            title: "New Section",
              description: "",
                modulesIndex:"{}"
            },
            payload = {};
            payload[newSection.uuid] =0;
            await this.createSection(newSection);
            await this.updateCourse({targetCourse:this.currentCourse.uuid,props:{contentIndex:payload}});

          }

          else {
            // Load Course content
          }


        },


          isSection(id) {
              return id.charAt(0) === 's';
          },
      },

    created() {

          this.generateCourseContent();
      //Trigger Modal and pass it the right parameters
      bus.$on('update-caller-id', (id) => {
        this.callerID =id;
        this.$root.$emit('bv::show::modal', 'add-module');
      });
    }
  }
</script>

<style>

</style>

<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container fluid class="p-5 my-2" >
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->

       <template v-for="content in courseContentdata">

           <!--Render Section  -->
          <component v-if="isSection(content.id)" is="Accordion" :accordionTitle="content.title"
                     :accordionID="content.id" :contentArray="content.modules"/>

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

      methods:{
        ...mapActions('course', {loadCourse: 'loadCourse'}),
        ...mapActions('section', {loadSection: 'loadSection'}),
        ...mapActions('module', {loadModule: 'loadModule'}),
        ...mapActions('lesson', {loadLesson: 'loadLesson'}),
        ...mapActions('interaction', {loadInteraction: 'loadInteraction'}),


          isSection(id) {
            //  return id.charAt(0) == 's'
          },
      },
      computed: {
        ...mapState('course', ['currentCourse']),
        ...mapState('section', ['currentSection','currentCourse']),
        ...mapState('module', ['currentModule','modules']),
        ...mapState('lesson', ['lessons']),
        ...mapState('interaction', ['interactions']),
  },
    created() {
      // Create a default section and add it to course if course is new


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

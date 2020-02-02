<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container fluid class="p-5 my-2" >
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->

       <template v-for="content in courseContentdata">

          <component is="Accordion" :accordionTitle="content.title" :accordionID="content.id">
              <template v-if="content.modules" v-for="m in content.modules"   v-slot:module>
              <component is="Accordion" :accordionTitle="m.title" :accordionID="m.id">
              </component>
              </template>
          </component>
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
  import {mapGetters} from "vuex";
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
          getCourseContentFromStore(id) {
              return this.getCourseContent(id);
          }
      },
      computed: {
          ...mapGetters([
              'getCourseContent'
          ]),
          courseContentdata() {
            return this.getCourseContentFromStore(this.$route.params.id);
          }
  },
    created() {
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

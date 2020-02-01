<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container fluid class="p-5 my-2" >
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->
        <div v-for="(section, index) in getSections" :key="index">
          <component is="Accordion" :accordionTitle="section.title" :accordionID="section.id">
          </component>
        </div>
        <AddBtn caller-i-d="parent"/>
        <!--End  Add  course Accordion-->
        <!-- Add  content  Accordion-->
        <AddSectionModal :callerId="this.callerID"/>
        <!-- End  Add Content Accordion-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import Accordion from "../components/Accordions/Accordion";
  import AddSectionModal from "../components/Modals/AddSectionModuleModal";
  import AddBtn from "../components/Buttons/AddBtn";
  import {mapGetters} from "vuex";
  import {bus} from "../main";

  export default {
    name: "newCourse",
    data(){
      return {
        callerID:"parent"
      }
    },
    components: {

      Accordion,
      AddSectionModal,
      AddBtn
    },
    computed: {
     ...mapGetters([
       'getSections'
     ])
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

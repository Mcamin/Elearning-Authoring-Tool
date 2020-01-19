<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container fluid class=" mt-5  px-5" >
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->
        <div v-for="(section, index) in getSections" :key="index">
          <component is="Accordion" :sectionTitle="section.title" :sectionID="section.id">
          </component>
        </div>
        <AddBtn :func="'add-section'"/>
        <!--End  Add  course Accordion-->
        <!-- Add  content  Accordion-->
        <AddSectionModal/>
        <AddContentModal/>
        <!-- End  Add Content Accordion-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import Accordion from "../components/Accordions/Accordion";
  import AddSectionModal from "../components/Modals/AddSectionModal";
  import AddBtn from "../components/Buttons/AddBtn";
  import AddContentModal from "../components/Modals/AddContentModal";
  import {mapGetters} from "vuex";

  export default {
    name: "newCourse",
    components: {
      AddContentModal,
      Accordion,
      AddSectionModal,
      AddBtn
    },
    data () {
      return {
      }
    },
    computed: {
     ...mapGetters([
       'getSections'
     ])
    }
  }
</script>

<style>

</style>

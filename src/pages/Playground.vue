<template>
  <b-container fluid class=" mt-5  px-5 " style="background:red; height:500px">
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->
        <div v-for="(section, index) in sections" :key="index">
          <component  is="Accordion" :sectionTitle="section.title">
          </component>
        </div>
         <AddBtn :func="'add-section'"/>
        <!--End  Add  course Accordion-->
        <!-- Add  content  Accordion-->
        <AddSectionModel/>
        <!-- End  Add Content Accordion-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Accordion from "../components/Accordions/Accordion";
  import AddSectionModel from "../components/Modals/AddSectionModal";
  import AddBtn from "../components/Buttons/AddBtn";

    export default {
        name: "playground",
      data () {
          return {
            sections: this.$store.state.course.sections
          }
      },
      components: {
        Accordion,
        AddSectionModel,
        AddBtn
      },
    }
</script>

<style scoped>

</style>

<template>
  <b-container fluid class=" mt-5  px-5 ">
    <p>New Course Title: {{ getNewCourses }}</p>
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->
        <Accordion/>
        <!--End  Add  course Accordion-->
        <!-- Add  content  Accordion-->
        <AddContentModel/>
        <!-- End  Add Content Accordion-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Accordion from "../components/Accordions/Accordion";
    import AddContentModel from "../components/Modals/AddUnitModal";

    export default {
        components: {Accordion, AddContentModel},
        computed: {
            ...mapGetters([
                'getNewCourse'
            ])
        }
    };
</script>

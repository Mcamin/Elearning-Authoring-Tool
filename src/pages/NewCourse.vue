<template>
  <b-container fluid class=" mt-5  px-5 ">
    <p>New Course Title: {{  }}</p>
    <p>TITLE: {{  }} </p>
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
    import store from '../store/index';

    export default {
        components: {Accordion, AddContentModel},

        methods: {
          ...mapActions([
            'addSection',
            'addSectionTitle'
          ])
      },
      mounted(){
          store.dispatch('addSection')
      }
    };
</script>

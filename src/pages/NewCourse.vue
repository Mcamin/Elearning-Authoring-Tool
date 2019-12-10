<template>
  <b-container class=" mt-3 bg-dark" >
    <b-row class=" bg-warning"  align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <Accordion/>
          <AddContentModel/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Accordion from "../components/Accordions/Accordion";
  import AddContentModel from "../components/Modals/AddUnitModal";
  export default {
      components: {Accordion,AddContentModel},
      computed: {
      ...mapGetters([
        'getNewCourse'
      ])
    }
  };
</script>

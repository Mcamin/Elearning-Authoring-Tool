<template>
  <b-container class="mt-3">
    <b-row align-v="center">
      <b-col  align-self="center">
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

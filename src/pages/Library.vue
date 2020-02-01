<template>
  <b-container fluid class="p-5 my-2">
  <FilterElement/>
    <b-row  align-h="center"   align-content="center">
      <b-col  align="center" align-self="center" >
        <div class="accordion">
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Accordion from "../components/Accordions/Accordion";
  import FilterElement from "../layout/WrapperElements/FilterElement"
    export default {
        name: "Library",
        components: {Accordion,FilterElement},

    }
</script>

<style scoped>

</style>

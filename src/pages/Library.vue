<template>
  <b-container fluid class="p-5 mx-4">
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
    export default {
        name: "Library",
        components: {Accordion}
    }
</script>

<style scoped>

</style>

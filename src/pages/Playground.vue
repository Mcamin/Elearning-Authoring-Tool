<template>
    <b-container>
      <b-row>
        <b-col>
          <b-button v-b-modal="'add-unit'">Show Modal</b-button>
          <AddContentModel></AddContentModel>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  import AddContentModel from "../components/Modals/AddUnitModal";

  export default {
        name: "Playground",
      components:{
          AddContentModel
      }
    }
</script>

<style scoped>

</style>

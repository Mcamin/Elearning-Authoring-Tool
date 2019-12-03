<template>
    <b-container>
      <b-row>
        <b-col>
          <b-button v-b-modal="'add-content'">Show Modal</b-button>
          <AddContentModel></AddContentModel>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  import AddContentModel from "../components/Modals/AddContentModal";

  export default {
        name: "Playground",
      components:{
          AddContentModel
      }
    }
</script>

<style scoped>

</style>

<template>
  <b-button block class="btn-wrapper" href="#" @click.prevent="addQuestion()">
    <h2>Add a question ...</h2>
  </b-button>
</template>

<script>

  import {bus} from "@/main";


  export default {
    name: "AddBtn",

    methods: {
      addQuestion() {
        bus.$emit("add-question");
      }
    }

  }
</script>

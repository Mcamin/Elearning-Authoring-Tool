<template>
  <b-row style="background-color: green" class="py-3 mx-5">
    <b-col>
      <el-input
        type="textarea"
        autosize
        placeholder="Enter answer feedback (optional) ..."
        v-model="feedback">
      </el-input>
    </b-col>
  </b-row>
</template>

<script>
    export default {
        name: "Feedback"
    }
</script>

<style scoped>

</style>

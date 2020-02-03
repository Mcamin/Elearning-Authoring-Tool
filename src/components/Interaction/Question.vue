<template>
  <b-row style="background-color: black" class="py-3 mx-5">
    <b-col>
      <el-input
        type="textarea"
        autosize
        placeholder="Enter a question title here..."
        v-model="question">
      </el-input>
    </b-col>
  </b-row>
</template>

<script>
    export default {
        name: "Question",
        data(){
            return {
                question:this.message
            }
        },
        props:{
            message: {
                type: String,
                default: 'hello'
            }
        }
    }
</script>

<style scoped>

</style>

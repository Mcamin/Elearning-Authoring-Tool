<template>
<b-container  fluid style="background-color:red " class="pt-5 h-100">

  <!-- End Question -->
<!-- Answers Component-->
  <b-row style="background-color: blue" class="py-3 mx-5">
    <b-col>
     <!--Answer Header component -->
      <b-container  style="background-color: black">
        <b-row  style="background-color:red ">
          <b-col cols="2"  style="background-color:black ">Correct</b-col>
          <b-col  cols style="background-color:black ">Answer Text</b-col>
          <b-col cols="3" style="background-color:black "> Multiple Choice / Single choice / Case sensitive /  </b-col>
          <b-col  cols style="background-color:black ">Match </b-col>
        </b-row>
      </b-container>
      <b-container  style="background-color:red ">
        <b-row  style="background-color:red ">
          <b-col cols="2"  style="background-color:blue ">Correct</b-col>
          <b-col  cols style="background-color:blueviolet ">Answer Text</b-col>
          <b-col cols="3" style="background-color:yellow "> Multiple Choice / Single choice / Case sensitive /  </b-col>
          <b-col  cols style="background-color:blueviolet ">Match </b-col>

        </b-row>
      </b-container>
    </b-col>
  </b-row>
  <!-- End Answers Component-->

 <!--- Feedback Component -->
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
  <!--- End Feedback -->
</b-container>
</template>

<script>

    import Question from "@/components/Interaction/Question";
    export default {
        name: "EditInteraction",
        components: {Question},
        data () {
            return {
                question:'',
                feedback:''
            }
        }
    }
</script>

<style scoped>

</style>

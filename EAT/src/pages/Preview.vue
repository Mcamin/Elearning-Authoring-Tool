<template>
    <b-container fluid class="d-flex h-100 justify-content-center align-items-center">
      <b-row  class="w-75 h-100 py-4">
        <b-col class="h-100 ">
          <!--Start Page-->

          <!--Content Page -->
          <!-- Exercise page-->
        </b-col>
      </b-row>
    </b-container>

</template>

<script>
  import {mapGetters, mapState} from "vuex";

  export default {
    name: "Preview",
    data() {
      return {}
    },
    computed:{
      ...mapGetters(
        'course', ['getCourseContent']
      ),
      ...mapGetters(
        'module' , ['getModuleContent']
      ),
      ...mapState('course', ['currentCourse']),

    }
    }
</script>

<style scoped>

</style>

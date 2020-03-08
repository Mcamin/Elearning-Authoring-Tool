<template>
    <b-container fluid class="d-flex h-100 justify-content-center align-items-center">
      <b-row  class="w-75 h-100 py-4">
        <b-col class="h-100 ">
          <!--Start Page-->
          <!-- <StartPage></StartPage>
        <ContentPagePreview :content="DummyContent"/>-->
          <Interaction/>
          <!--Content Page -->
          <!-- Exercise page-->
        </b-col>
      </b-row>
    </b-container>

</template>

<script>
  import {mapGetters, mapState} from "vuex";
import ContentPagePreview from "@/components/Preview/ContentPage";
  import StartPage from "@/components/Preview/StartPage";
  import Interaction from "@/components/Preview/Interaction";
  export default {
    name: "Preview",
    data() {
      return {
        DummyContent:"<h1>Content goes here</h1>"
      }
    },
    components:{Interaction, StartPage, ContentPagePreview},
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

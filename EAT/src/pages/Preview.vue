<template>
  <b-container fluid class="d-flex h-100 justify-content-center align-items-center">
    <b-row class="w-75 h-100 py-4 d-flex align-items-center">
      <b-col style="max-height: 680px" class="h-100 ">
        <!--Start Page
       <StartPage></StartPage>-->

      <ContentPagePreview v-if="element.type==='Lesson' " :content="element.content"/>
        <Interaction v-else :interaction="element"/>
        <!-- Content Page -->
        <!-- Exercise page-->
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
  import {mapGetters} from "vuex";
  import ContentPagePreview from "@/components/Preview/ContentPage";
  import Interaction from "@/components/Preview/Interaction";

  export default {
    name: "Preview",
    data() {
      return {
        currentQuestion:{},
        element: {},
        elementToRender: {},
        startClicked: false
      }
    },
    components: {Interaction, ContentPagePreview},
    computed: {

      ...mapGetters(
        'course', ['getCourseContent']),
      ...mapGetters(
        'module', ['getModuleContent']),
      ...mapGetters(
        'module', ['getSectionContent']),
      ...mapGetters(
        'interaction', ['getInteractionByID']),
      ...mapGetters(
        'lesson', ['getLessonByID'])

    },
    methods: {},
    created() {
      switch (this.$route.params.id.charAt(0)) {
        case 's':
          // load section content
          break;
        case'm':
          // load module content
          break;
        case 'i':
            this.element = this.getInteractionByID(this.$route.params.id);
            this.currentQuestion = this.element.questions[0];
            this.currentIndex = 0;
          //load interaction
          break;
        case 'l':
          //load lesson
          this.element = this.getLessonByID(this.$route.params.id);
          break;
        default:
        //load course content

      }
    }
  }
</script>


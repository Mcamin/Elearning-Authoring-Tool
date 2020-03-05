<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container class="p-5 my-2">
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->
        <template v-if="getCourseContent.length>0" v-for="(content,idx) in getCourseContent">

          <!--Render Section  -->
          <component v-if="isSection(content.uuid)" :is="'Accordion'" :accordionTitle="content.title"
                     :accordionID="content.uuid" :key="idx"/>

          <!--Render Module  -->
          <component v-else :is="'Accordion'" :accordionTitle="content.title"
                     :accordionID="content.uuid" :key="idx"/>

        </template>


        <AddBtn triggered-by="page"/>
        <!--End  Add  course Accordion-->
        <!-- Add  section / module  Modal-->
        <AddSMModal/>
        <AddILModal/>
        <DeleteModal/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import Accordion from "@/components/Accordions/Accordion";
  import AddSMModal from "@/components/Modals/AddModuleSectionModal";
  import AddILModal from "@/components/Modals/AddLessonInteractionModal";
  import AddBtn from "@/components/Buttons/AddBtn";
  import DeleteModal from "@/components/Modals/DeleteModal"
  import {mapActions, mapGetters, mapState} from "vuex";
  import {uuid} from "vue-uuid";

  export default {
    name: "EditCourse",
    data() {
      return {}
    },
    components: {
      Accordion,
      AddSMModal,
      AddBtn,
      AddILModal,
      DeleteModal
    },
    computed: {
      ...mapState('course', ['currentCourse']),
      ...mapState('section', ['currentSection', 'sections']),
      ...mapState('module', ['currentModule', 'modules']),
      ...mapState('lesson', ['lessons']),
      ...mapState('interaction', ['interactions']),
      ...mapGetters(
        'course', ['getCourseContent']
      ),
      ...mapGetters(
        'section', ['getSectionByID']
      ),
      ...mapGetters(
        'module', ['getModuleByID']
      )
    },
    methods: {
      ...mapActions('course', {loadCourse: 'loadCourse', updateCourse: 'updateCourse'}),
      ...mapActions('section', {loadSection: 'loadSection', createSection: 'createSection'}),
      ...mapActions('module', {loadModule: 'loadModule'}),
      ...mapActions('lesson', {resetLesson: 'resetLesson'}),
      ...mapActions('interaction', {resetInteraction: 'resetInteraction'}),

      async generateCourseContent() {
        // Create a new section and add it to course if course is new

        if (Object.entries(this.currentCourse.contentIndex).length === 0) {
          let sec_id = 's-' + uuid.v1(),
            newSection = {
              uuid: sec_id,
              title: "New Section",
              description: "",
              modulesIndex: {}
            },
            payload = {};
          payload[sec_id] = 0;
          await this.createSection(newSection);
          await this.updateCourse({
            targetCourse: this.currentCourse.uuid,
            props:
              {
                contentIndex: payload
              }
          });


        }
        // Load course content
        else {
          if (this.sections.length === 0 && this.modules.length === 0) {
            //keys: 0,1,2,3 positions in contentCourse array
            // key : uuid of the element to load
            const keys = Object.keys(this.currentCourse.contentIndex);

            for (const key in keys) {
              if (this.isSection(keys[key]))
                await this.loadSection(keys[key]);

              else
                await this.loadModule(keys[key]);

            }

          }
        }

      },

      isSection(sec_id) {
        return sec_id.charAt(0) === 's';
      },
    },

    created() {
      //TODO: reset those
      //Reset currentInteraction
      //Reset Current Lesson
      this.resetInteraction();
      this.resetLesson();
      this.generateCourseContent();
    }
  }
</script>

<style>

</style>

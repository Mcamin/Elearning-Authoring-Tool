<template>
  <b-container class=" pb-5 mt-5">
    <SettingsCard :meta="courseMeta"/>
    <!-- Course Content -->
    <b-row class="course-content-wrapper my-4 pt-4">
      <b-col   align-self="center" class="h-100">
        <Container group-name="1"  v-if="getCourseContent.length>0" @drop="onDropSectionModule" drag-handle-selector=".section-module-drag-handle"
                   class="w-100">
        <template v-for="(content,idx) in getCourseContent">
          <!--Render Section  -->

          <component v-if="isSection(content.uuid)" :is="'Accordion'" :element="content" :key="idx"/>
          <!--Render Module  -->
          <component v-else :is="'Accordion'"  :element="content" :key="idx"/>

        </template>
        </Container>
      </b-col>
    </b-row>
    <!-- End Course Content -->
    <b-row class="add-btn-row">
      <AddBtn triggered-by="page"/>
    </b-row>

    <b-row class="modals">
      <!-- Add  section / module  Modal-->
      <AddSMModal/>
      <!-- Add  interaction / Lesson  Modal-->
      <AddILModal/>
      <!-- Delete Modal-->
      <DeleteModal/>
      <!-- Edit Modal-->
      <EditModal/>
      <!-- Generate Tokens Modal-->
      <GenerateTokenModal/>
    </b-row>
  </b-container>
</template>

<script>

  import Accordion from "@/components/Accordions/Accordion";
  import GenerateTokenModal from "@/components/Modals/GenerateTokenModal";
  import AddSMModal from "@/components/Modals/AddModuleSectionModal";
  import AddILModal from "@/components/Modals/AddLessonInteractionModal";
  import DeleteModal from "@/components/Modals/DeleteModal";
  import EditModal from "@/components/Modals/EditModal";
  import AddBtn from "@/components/Buttons/AddBtn";
  import {Container} from "vue-smooth-dnd";
  import {mapActions, mapGetters, mapState} from "vuex";
  import {uuid} from "vue-uuid";
  import SettingsCard from "@/components/Cards/SettingsCard";
  import {applyDrag} from "@/utils/helpers";
  export default {
    name: "EditCourse",
    components: {
      SettingsCard,
      Accordion,
      AddBtn,
      GenerateTokenModal,
      AddSMModal,
      AddILModal,
      EditModal,
      DeleteModal,
      Container,
    },

    computed: {
      ...mapState('course', ['currentCourse']),
      ...mapState('section', ['sections']),
      ...mapState('module', ['modules']),
      ...mapGetters('course', ['getCourseContent']),
      courseMeta(){
        return {
          title: this.currentCourse.title,
          description: this.currentCourse.description,
          tags: this.currentCourse.tags
        }
      }
    },
    methods: {
      ...mapActions('course', {loadCourse: 'loadCourse', updateCourse: 'updateCourse'}),
      ...mapActions('section', {loadSection: 'loadSection', createSection: 'createSection'}),
      ...mapActions('module', {loadModule: 'loadModule', resetModule: 'resetModule'}),
      ...mapActions('lesson', {resetLesson: 'resetLesson'}),
      ...mapActions('interaction', {resetInteraction: 'resetInteraction'}),

      /**
       * Initialize the Course Content
       * @returns {Promise<void>}
       */
      async generateCourseContent() {

        if (Object.entries(this.currentCourse.contentIndex).length === 0) {
          let sec_id = 's-' + uuid.v1(),
            newSection = {
              uuid: sec_id,
              title: "New Section",
              type: 'Section',
              description: "",
              modulesIndex: {},
              tokens:{}
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
      onDropSectionModule(dropResult){
          let questionsArray = [...this.getCourseContent],
            payload = {};
          questionsArray = applyDrag(questionsArray, dropResult);
          payload = questionsArray.reduce((obj, item,index) => {
            obj[item.uuid] = index;
            return obj
          }, {});
          this.updateCourse({
            targetCourse: this.currentCourse.uuid,
            props: {
              contentIndex: payload
            }
          });

      },
    },


    created() {
      this.resetModule();
      this.resetInteraction();
      this.resetLesson();
      this.generateCourseContent();
    }
  }
</script>


<template>

  <b-container>

    <b-row class="my-5">
      <b-col>
        <Container  v-if="currentInteraction"  @drop="onDropQuestion" drag-handle-selector=".question-drag-handle" class="w-100">
          <!-- Question Accordion -->
          <Draggable v-for="question in  currentInteraction.questions" :key="question.question_id" class="question-accordion-wrapper mt-3">
            <QuestionAccordion :question="question"/>
          </Draggable>
          <!-- End Question Accordion -->
        </Container>
      </b-col>
    </b-row>
    <!-- Add Question -->
    <b-row class="my-5">
      <b-col>
        <AddQuestionBtn/>
      </b-col>
    </b-row>
    <!-- End add Question -->
  </b-container>
</template>

<script>


  import {bus} from "@/main";
  import {Container, Draggable} from "vue-smooth-dnd";
  import QuestionAccordion from "@/components/Accordions/QuestionAccordion";
  import AddQuestionBtn from "@/components/Buttons/AddQuestionBtn";
  import keygen from 'keygen'
  import {applyDrag} from "@/utils/helpers";
  import {mapActions, mapState} from "vuex";


  export default {
    name: "EditInteraction",
    components: {QuestionAccordion, AddQuestionBtn, Container, Draggable},
    data(){
      return{
        intervalId:''
      }
    },
    computed: {
      ...mapState('interaction', ['currentInteraction']),
      ...mapState('module', ['modules']),
    },
    methods: {

      ...mapActions('interaction', {createInteraction: 'createInteraction',
        updateInteractionState: 'updateInteractionState', updateInteraction: 'updateInteraction'}),
      ...mapActions('module', {updateModule: 'updateModule'}),

      //  Initialize Interaction content on creation
      async initInteractionContent() {
        let
          newInteraction = null,
          currentModule = this.modules.find(el => el.uuid === this.$route.params.id),
          moduleContentIndex = currentModule ? currentModule.contentIndex : {},
          contentLength = Object.keys(moduleContentIndex).length,
          id = 'i-' + this.$uuid.v1();

        if (!this.currentInteraction) {
          newInteraction = {
            uuid: id,
            title: "New Interaction",
            type: "Interaction",
            description: "",
            score: 0,
            shuffle: false,
            questions: [{
              question_id: 'q-' + keygen.hex(8),
              questionText: "",
              questionType: "Single choice",
              answers: [
                {text: "", id: 'a-' + keygen.hex(6), checked: false},
              ]
            }]
          };
          // Create an interaction
          await this.createInteraction(newInteraction);
          //update Module Index
          moduleContentIndex[id] = contentLength;
          await this.updateModule({
            targetModule: this.$route.params.id,
            props: {
              contentIndex: moduleContentIndex
            }
          });
        }

      },

    addQuestion() {

      let newQuestion = {
        question_id: 'q-' + keygen.hex(8),
        questionText: "",
        questionType: "Single choice",
        answers: [
          {text: "", id: 'a-' + keygen.hex(6), checked: false},
        ]
      };
      let questionsArray = [...this.currentInteraction.questions];
        questionsArray.push(newQuestion);
      this.updateInteractionState({
        targetInteraction:this.currentInteraction.uuid,
        props:{
          questions:questionsArray
        }
      });
    },
    removeQuestion(question_id) {
      let questionsArray = [...this.currentInteraction.questions];
          questionsArray = questionsArray.filter(el => el.question_id !== question_id);
      this.updateInteractionState({
        targetInteraction:this.currentInteraction.uuid,
        props:{
          questions:questionsArray
        }
      });
    },
    onDropQuestion(dropResult) {
      let questionsArray = [...this.currentInteraction.questions];
        questionsArray = applyDrag(questionsArray, dropResult);
      this.updateInteractionState({
        targetInteraction:this.currentInteraction.uuid,
        props:{
          questions:questionsArray
        }
      });

    },
     async saveInteractionInDB(){
        let interActionID = this.currentInteraction.uuid,
          interactionContent = {...this.currentInteraction};
       const isSaved =  await this.updateInteraction({
         targetInteraction:interActionID,
         props:interactionContent
       });
       bus.$emit('element-saved',isSaved);
      }
  },
  created()
  { this.initInteractionContent();
    bus.$on("add-question", () => {
      this.addQuestion();
    });
    bus.$on("remove-question", (question_id) => {
      this.removeQuestion(question_id);
    });
    // save every x minute : set in .env
    this.intervalId = setInterval(this.saveInteractionInDB ,parseInt(process.env.VUE_APP_SAVE_INTERVAL) *60000);

  },
    beforeDestroy () {
      clearInterval(this.intervalId);
    },
  }
</script>

<style scoped>

</style>

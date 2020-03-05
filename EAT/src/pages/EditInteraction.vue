<template>

  <b-container>

    <b-row class="my-5">
      <b-col>
        <Container @drop="onDropQuestion" drag-handle-selector=".question-drag-handle" class="w-100">
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
    computed: {
      ...mapState('interaction', ['currentInteraction']),
      ...mapState('module', ['modules']),
    },
    methods: {

      ...mapActions('interaction', {createInteraction: 'createInteraction'}),

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
            targetSection: this.$route.params.id,
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
      this.questions.push(newQuestion);
    },
    removeQuestion(question_id) {
      this.questions.splice(this.questions.findIndex(x => {
        x.question_id === question_id
      }), 1);
    },
    onDropQuestion(dropResult) {
      this.questions = applyDrag(this.questions, dropResult);
    },
  },
  created()
  { this.initInteractionContent();
    bus.$on("add-question", () => {
      this.addQuestion();
    });
    bus.$on("remove-question", (question_id) => {
      this.removeQuestion(question_id);
    });

  }
  }
</script>

<style scoped>

</style>

<template>

  <b-container>

    <b-row class="my-5">
      <b-col>
        <Container @drop="onDropQuestion" drag-handle-selector=".question-drag-handle" class="w-100">
          <Draggable v-for="question in questions" :key="question.question_id" class="accordion-wrapper mt-3">
          <QuestionAccordion :question="question" />
          </Draggable>
        </Container>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <AddQuestionBtn/>
      </b-col>
    </b-row>
    <!-- End Answers Component-->


    <!--- End Feedback -->
  </b-container>
</template>

<script>


  import {bus} from "@/main";
  import {Container,Draggable } from "vue-smooth-dnd";
  import QuestionAccordion from "@/components/Accordions/QuestionAccordion";
  import AddQuestionBtn from "@/components/Buttons/AddQuestionBtn";
  import keygen from 'keygen'
  import {applyDrag} from "@/utils/helpers";
  export default {
    name: "EditInteraction",
    components: {QuestionAccordion, AddQuestionBtn,Container,Draggable},
    data() {
      return {
        questions: [
          {
            question_id: 'question_1',
            questionText: "this is the question 1",
            questionType: "Multiple choice",
            answers: [
              {text: "First choice", id: 0, checked: false},
              {text: "First choice", id: 1, checked: true},
              {text: "First choice", id: 2, checked: false},
            ]
          },
          {
            question_id: 'question_2',
            question: "this is the question 2",
            questionType: "Multiple choice",
            answers: [
              {text: "First choice", id: 0, checked: false},
              {text: "First choice", id: 1, checked: true},
              {text: "First choice", id: 2, checked: true},
            ]
          }

        ]
      }
    },
    methods: {
      addQuestion() {

        let newQuestion =      {
          question_id: 'q-'+keygen.hex(8),
          questionText: "",
          questionType: "Single choice",
          answers: [
            {text: "", id: 'a-'+keygen.hex(6), checked: false},
          ]
        };
        this.questions.push(newQuestion);
      },
      removeQuestion(question_id) {
        this.questions.splice(  this.questions.findIndex(x => {x.question_id === question_id}), 1);
      },
      onDropQuestion(dropResult) {
        this.questions = applyDrag(this.questions, dropResult);
      },
    },
    created() {
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

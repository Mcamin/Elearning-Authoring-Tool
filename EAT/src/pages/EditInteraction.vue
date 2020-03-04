<template>

<b-container>

  <b-row class="my-5">
    <b-col>
       <template v-for="question in questions" >
 <QuestionAccordion :question="question" :key="question.question_id"/>
   </template>

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
    //import {Container } from "vue-smooth-dnd";
    import QuestionAccordion from "@/components/Accordions/QuestionAccordion";
    import AddQuestionBtn from "@/components/Buttons/AddQuestionBtn";
    export default {
        name: "EditInteraction",
        components: {QuestionAccordion,AddQuestionBtn},
        data () {
            return {
                questions:[
                  {question_id:'question_1',
                    questionText:"this is the question 1",
                    questionType:"Multiple choice",
                    answers:[
                      { text: "First choice", id: 0, checked: false},
                      { text: "First choice", id: 1, checked: true},
                      {text: "First choice", id: 2, checked: false},
                    ]
                  },
                  {question_id:'question_2',
                    question:"this is the question 2",
                    questionType:"Multiple choice",
                    answers:[
                      { text: "First choice", id: 0, checked: false},
                      { text: "First choice", id: 1, checked: true},
                      {text: "First choice", id: 2, checked: true},
                    ]
                  }

                ]
            }
        },
      methods:{
      },
      created() {
          bus.$on("add-question",()=> {


          });


      }

    }
</script>

<style scoped>

</style>

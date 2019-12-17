<template>
  <b-modal id="add-unit" centered size="lg" hide-footer hide-header>

    <template v-slot:default>
      <router-link  to="/addLesson">
     <AddContentCard :header="lesson.header" :icon="lesson.icon">
       <p slot="description" v-html="lesson.description" />
     </AddContentCard>
      </router-link>
       <br>
      <router-link  to="/addQuiz">
      <AddContentCard :header="quiz.header" :icon="quiz.icon">
        <p slot="description" v-html="quiz.description"/>
      </AddContentCard>
      </router-link>
    </template>

  </b-modal>
</template>

<script>
  import AddContentCard from "../Cards/AddContentCard";
    export default {
        name: "AddContentModel",
        data() {
            return{
                lesson:{
                    header:"LESSON",
                    description:"Create a lesson from a wide range of e blocks. " +
                        "You can access existing lessons from your repository",
                    icon:"book"
                },
                quiz:{
                    header:"QUIZ",
                    description:"Test the learner's knowledge with a quiz. You can " +
                        "access quizzes aestions from your repository",
                    icon:"question-circle"
                },
        }
        },
        components:{
            AddContentCard
        }
    };
</script>
<style lang="css">
</style>

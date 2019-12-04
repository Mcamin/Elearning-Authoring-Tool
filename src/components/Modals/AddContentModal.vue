<template>
  <b-modal id="add-content" centered size="lg" hide-footer hide-header>

    <template v-slot:default>
     <AddContentCard :header="lesson.header":icon="lesson.icon":description="lesson.description"></AddContentCard>
      <AddContentCard :header="quiz.header":icon="quiz.icon":description="quiz.description"></AddContentCard>
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
                    icon: "books",
                    description:"Create a lesson from a wide range of e blocks.</br> " +
                        "You can access existing lessons from your repository"
                },
                quiz:{
                    header:"QUIZ",
                    icon: "question mark",
                    description:"Test the learner's knowledge with a quiz. You can</br> " +
                        "access quizzes aestions from your repository"
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

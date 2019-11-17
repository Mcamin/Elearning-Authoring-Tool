<template>
  <b-row>
<card v-for="course in courses"
      :title="course.title"
      :description="course.description"
></card>
  </b-row>
</template>
<script>
import Courses from "@/data/courses.js"
import Card from "../components/Cards/Card";

  export default {
    components: {
        Card
    },
    data() {
      return{
          courses: Courses
      }
    },

  };
</script>
<style>
</style>

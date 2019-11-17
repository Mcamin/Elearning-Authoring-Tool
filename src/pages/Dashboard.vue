<template>
  <div>
<card v-for="course in courses" :title="course.title"></card>
  </div>
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

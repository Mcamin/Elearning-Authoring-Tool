<template>
  <b-container>
    <b-row>
      <b-col cols="6" >
        <new-course-card/>

      </b-col>
        <b-col cols="6">
          <new-course-card/>
      </b-col>

    </b-row>
  </b-container>
</template>
<script>
import Courses from "@/data/coursesMetadata.js"
import Card from "../components/Cards/CourseCard";
import NewCourseCard from "../components/Cards/NewCourseCard";

  export default {
    components: {
        Card,
        NewCourseCard
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

<template>
  <b-container >
    <b-row align-h="end" class="mb-2">
      <b-col cols="4" >
            <span class="float-right">show : 9 / 24 / 36</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <new-course-card></new-course-card>
      </b-col>
      <b-col md="3" v-for="course in courses">
        <card
          :title="course.title"
          :languages="course.languages"
          :target="course.targetPage"
          :imageSrc="course.imagePath"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Courses from "@/data/courses.js"
import Card from "../components/Cards/CourseCard";
import NewCourseCard from "../components/Modals/AddContentModal";

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

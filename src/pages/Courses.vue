<template>
  <b-container fluid class=" p-4 my-2">
    <b-row align-h="end" class="mb-2">
      <b-col cols="4" >
            <span class="float-right">show : 9 / 24 / 36</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <card
          v-b-modal="'modal-new-course'"
          title="Create a new Course"
          url=""
        />
      </b-col>
      <b-col md="3" v-for="course in courses" :key="courses.title">
        <card
          :title="course.title"
          :course-category="course.title"
          :course-languages="course.languages"
          :url="course.targetPage"
          :img="course.imagePath"
        />
      </b-col>
    </b-row>
    <new-course-card></new-course-card>
  </b-container>
</template>
<script>
import Courses from "@/data/coursesMetadata.js"
import Card from "../components/Cards/CourseCard";
import NewCourseCard from "../components/Modals/NewCourseModal";

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

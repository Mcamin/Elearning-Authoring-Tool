<template>
  <b-container fluid class=" p-4 my-2">
    <FilterElement/>
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
    <NewCourseModal/>
  </b-container>
</template>
<script>
import Courses from "@/data/coursesMetadata.js"
import Card from "../components/Cards/CourseCard";
import NewCourseModal from "../components/Modals/NewCourseModal";
import FilterElement from "../layout/WrapperElements/Filter"

  export default {
    components: {
        Card,
        NewCourseModal,
      FilterElement
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

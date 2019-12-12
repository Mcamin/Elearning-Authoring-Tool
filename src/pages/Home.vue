<template>
  <b-container  class="bg-dark ">
    <b-row align-h="center">
      <b-col  cols="5" md="6" sm="1" class="mb-4">
      <CourseCard :title="library.title" :url="library.url":img="library.img"/>
      </b-col>
        <b-col  cols="5" md="6" sm="1" class="mb-4">
        <CourseCard :title="courses.title" :url="courses.url":img="courses.img"/>
          </b-col>
    </b-row>
  </b-container>

</template>
<script>

import CourseCard  from "../components/Cards/CourseCard";

  export default {
    components: {
        CourseCard
    },
    data() {
      return{

          library:{
              title:"Go To Library",
              url:"/library",
              img:"./static/home/library.jpg"},
          courses:{
              title:"Go To Courses",
              url:"/courses",
              img:"./static/home/courses.jpg"},
      }
    },

  };
</script>
<style>
</style>

<template>
  <b-container fluid>
    <b-row align-h="center">
      <CourseCard :title="library.title" :url="library.url":img="library.img"/>
      <CourseCard :title="courses.title" :url="courses.url":img="courses.img"/>
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

<template>
  <b-container  class="h-100">
    <b-row class="align-items-center h-100">
      <b-col  cols="5" md="6" sm="1" class="mb-4 mx-auto">
      <CourseCard :title="library.title" :url="library.url" :img="library.img"/>
      </b-col>
        <b-col  cols="5" md="6" sm="1" class="mb-4 mx-auto">
        <CourseCard :title="courses.title" :url="courses.url" :img="courses.img"/>
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

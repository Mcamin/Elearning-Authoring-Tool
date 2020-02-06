<template>
  <b-container fluid class="h-100 home-wrapper">
    <b-row class="d-flex align-items-center h-100">
      <b-col  cols="6" class="">
       <h1> Welcome to the Elearning Authoring Tool</h1>
        <h4>Create an Engaging Course or Start Adding Content to the Library</h4>
        <b-container fluid >
          <b-row class="mt-5">
            <b-col><b-button  pill :to="courses.url">{{courses.title}}</b-button></b-col>
            <b-col><b-button pill :to="library.url">{{library.title}}</b-button></b-col>
          </b-row>
        </b-container>
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
          library: {
            title: "Go To Library",
            url: "/library",
          },
          courses: {
            title: "Go To Courses",
            url: "/courses",
          }
      }
    },

  };
</script>
<style>
</style>

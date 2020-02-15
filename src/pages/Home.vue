<template>
  <b-container fluid class="h-100 home-wrapper px-0">
    <b-row class="d-flex align-items-center h-100 pl-4 mx-0">
      <b-col  cols="6" class="">
       <h1 class="primary-color"> Welcome to the Elearning <br> Authoring Tool</h1>
        <h4>Create an Engaging Course or <br> Start Adding Content to the Library</h4>
        <b-container fluid class="px-0" >
          <b-row class="mt-5">
            <b-col><b-button class="mr-2"  pill variant="primary" :to="courses.url">{{courses.title}}</b-button>
         <b-button  class="mx-2"  pill  variant="primary" :to="library.url">{{library.title}}</b-button></b-col>
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

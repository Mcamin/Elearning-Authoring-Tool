<template>
  <b-container >
    <b-row align-h="end" class="mb-2">
      <b-col cols="4" >
            <span class="float-right">show : 9 / 24 / 36</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col   md="3" v-for="course in courses">
        <card
          :title="course.title"
          :description="course.description"
        ></card>
      </b-col>
    </b-row>
  </b-container>

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

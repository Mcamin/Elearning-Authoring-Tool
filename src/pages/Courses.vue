<template>
  <b-container  class=" p-4 my-2">
    <FilterElement/>
    <b-row>
      <b-col md="3">
        <CourseCard
          v-b-modal="'modal-new-course'"
          title="Create a new Course"
          url=""
        />
      </b-col>
      <b-col md="3" v-for="(course, index) in getAllCourses" :key="index">
        <CourseCard
          :id="course.id"
          :title="course.title"
          :course-category="course.title"
          :course-languages="course.languages"
          :url="{ name: 'edit-course', params: { id: course.id ,title: course.title} }"
          :img="course.thumbnail.url"
        />
      </b-col>
    </b-row>
    <NewCourseModal/>
  </b-container>
</template>
<script>

import CourseCard from "../components/Cards/CourseCard";
import NewCourseModal from "../components/Modals/NewCourseModal";
import FilterElement from "../layout/WrapperElements/FilterElement"
import {Notification} from 'element-ui'

import {mapGetters} from "vuex";

  export default {
    components: {
        CourseCard,
        NewCourseModal,
      FilterElement
    },
    data() {
      return{


      }
    },
      computed: {
          ...mapGetters([
              'getAllCourses'
          ])
      },

      created() {
        this.$notify({
          title: 'Title',
          message: 'I\'m at the top left corner',
          position: 'top-left',
          type: 'info',
          duration: 0,

        });

    }

  };
</script>
<style>

</style>

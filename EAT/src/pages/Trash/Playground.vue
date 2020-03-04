<template>

  <b-container  class=" mt-5 h-100 px-0" style="background: red">
    <b-row >
      <b-col   >
        <QuestionAccordion/>
      </b-col>
    </b-row>
    <NewCourseModal/>
  </b-container>
</template>

<script>

  import CourseCard from "@/components/Cards/CourseCard";
  import NewCourseModal from "@/components/Modals/NewCourseModal";
  import FilterElement from "@/layout/WrapperElements/FilterElement"
  import {Notification} from 'element-ui'
  import {bus} from '@/main'
  import {mapGetters} from "vuex";


  import QuestionAccordion from "@/components/Accordions/QuestionAccordion";
  export default {

    name: "playground",
    components:{QuestionAccordion  },

    data() {
      return {
        viewMode:'card-view'
      }
    },
    computed: {
      ...mapGetters([
        'getAllCourses',
        'getCoursesByCategory',
        'ascendingCoursesSort',
        'descendingCoursesSort'
      ]),
      setView () {
        switch (this.viewMode) {
          //Load Lessons
          case 'card-view':
            return 'card-view';
            break;
          //Load Interactions
          case 'list-view':
            return 'list-view';
            break;
        }
      }
    },

    created() {
      bus.$on('list-view', () => {

        this.viewMode='list-view';

      });
      bus.$on('card-view', () => {
        this.viewMode='card-view';
        console.log( this.viewMode);
      });

      this.$notify({
        title: 'Dashboard',
        message: 'This is the place to administrate courses. </br></br> Start creating a new course or select existing ones.',
        position: 'top-left',
        type: 'info',
        duration: 0,
        dangerouslyUseHTMLString: true,
      });
    },
    beforeRouteLeave (to, from, next) {
      this.$notify.closeAll();
      next();
    }
  };
</script>

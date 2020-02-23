<template>
  <b-container class=" p-4 my-2"
               v-loading="loading"
               fullscreen="true"
               element-loading-text="Loading Courses..."
               element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <FilterElement/>
    <!-- Card View -->
    <b-row v-if="setView==='card-view'">
      <b-col md="3" class="mb-5">
        <CourseCard
          v-b-modal="'new-course-modal'"
          title="Create a new Course"
          url=""
        />
      </b-col>
      <b-col md="3" class="mb-4" v-for="(course, index) in coursesArray" :key="index">
        <CourseCard
          :id="course._id"
          :title="course.title"
          :course-category="course.category"
          :description="course.description"
          :course-duration="course.duration"
          :course-languages="course.languages.join(', ')"
          :url="{ name: 'edit-course', params: { id: course.uuid ,title: course.title} }"
          :img="course.thumbnail"
          nbrOfSections="0"
        />
      </b-col>
    </b-row>
    <!-- End Card View -->
    <!-- List View -->
    <b-row v-else>
      <b-col>
        <template v-for="(course, index) in coursesArray">
          <CourseList
            :id="course._id"
            :title="course.title"
            :course-category="course.title"
            :course-languages="course.languages.join(', ')"
            :url="{ name: 'edit-course', params: { id: course._id ,title: course.title} }"
            :img="course.thumbnail"
          />
        </template>
      </b-col>
    </b-row>
    <!-- End List View -->
    <NewCourseModal/>
  </b-container>
</template>
<script>
  import CourseList from "../components/Cards/CourseList";
  import CourseCard from "@/components/Cards/CourseCard";
  import NewCourseModal from "@/components/Modals/NewCourseModal";
  import FilterElement from "@/layout/WrapperElements/FilterElement";
  import {bus} from '@/main';
  import {mapActions, mapState} from "vuex";
  import {dynamicSort} from '@/utils/helpers'

  export default {
    name: "courses",
    components: {
      CourseList,
      CourseCard,
      NewCourseModal,
      FilterElement
    },
    data() {
      return {
        viewMode: 'card-view',
        loading: false ,
        error: false,
        sortValue:'Recent',
        filterValue:'AllCategories',
      }
    },
    computed: {
      ...mapState('course', ['courses']),
      setView() {
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
      },
      coursesArray(){
        let tempArray = [...this.courses];
        if(this.filterValue!== "AllCategories")
          tempArray = tempArray.filter(el => el.category ===this.filterValue);
        switch (this.sortValue) {
          case 'TitleReversed':
            return tempArray.sort(dynamicSort("-title"));
            break;
          case 'Title':
            return tempArray.sort(dynamicSort("title"));
            break;
          case 'Recent':

            return tempArray.reverse();
            break;
          default:
            break;
        }
      }
    },
    methods: {
      ...mapActions('course', {loadCourses: 'loadCourses',resetCourse:'resetCourse'})
    },
    created() {
      bus.$on('list-view', () => {

        this.viewMode = 'list-view';
      });
      bus.$on('card-view', () => {
        this.viewMode = 'card-view';

      });
      bus.$on('change-sort', (val) => {
        this.sortValue = val;
      });
      bus.$on('change-filter', (val) => {
        this.filterValue = val;

      });

    }, mounted() {
         this.resetCourse();
         this.loadCourses();
  /*    if(){
        this.loading = false;
        this.error = false;
      }else{
        this.loading = false;
        this.error = false;
      }*/





    }
  };
</script>
<style>

</style>

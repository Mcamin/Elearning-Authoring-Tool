<template>
  <b-container class=" p-4 my-2">
    <FilterElement/>
    <b-row v-if="setView==='card-view'">
      <b-col md="3">
        <CourseCard
          v-b-modal="'modal-new-course'"
          title="Create a new Course"
          url=""
        />
      </b-col>
      <b-col md="3" v-for="(course, index) in courses" :key="index">
        <CourseCard
          :id="course._id"
          :title="course.title"
          :course-category="course.title"
          :course-languages="course.languages"
          :url="{ name: 'edit-course', params: { id: course._id ,title: course.title} }"
          :img="course.thumbnail"
        />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col >
         <template v-for="(course, index) in courses" >
           <CourseList
             :id="course._id"
             :title="course.title"
             :course-category="course.title"
             :course-languages="course.languages"
             :url="{ name: 'edit-course', params: { id: course._id ,title: course.title} }"
             :img="course.thumbnail"
           />
         </template>
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
    import {mapActions,mapState} from "vuex";
    import CourseList from "../components/Cards/CourseList";

    export default {
        name:"courses",
        components: {
          CourseList,
            CourseCard,
            NewCourseModal,
            FilterElement
        },
        data() {
            return {
                viewMode:'card-view',
            }
        },
        computed: {
          ...mapState('course', ['courses']),
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
      methods:{
        ...mapActions('course',  { loadCourses: 'loadCourses' })
      },
        created() {
            bus.$on('list-view', () => {

                this.viewMode='list-view';
            });
            bus.$on('card-view', () => {
                this.viewMode='card-view';
            });
            this.loadCourses();

           /* this.$notify({
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
            next();*/
        }
    };
</script>
<style>

</style>

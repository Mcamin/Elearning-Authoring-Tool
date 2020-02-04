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
    <b-row v-else>
      <b-col >
        {{setView}}
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

    export default {
        name:"courses",
        components: {
            CourseCard,
            NewCourseModal,
            FilterElement
        },
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

        }

    };
</script>
<style>

</style>

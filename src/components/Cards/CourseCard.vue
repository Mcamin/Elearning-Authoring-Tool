<template>
  <router-link :to="url" class ="course-card-wrapper" >
    <b-card
      no-body
     class="mb-3"
    >
      <b-card-body>
        <b-card-title>{{title}}</b-card-title>
        <b-card-sub-title  v-if="title !== 'Create a new Course'" class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
           {{description}}
        </b-card-text>
      </b-card-body>

      <div v-if="title === 'Create a new Course'" class="h-100   d-flex justify-content-center align-items-center">
        <font-awesome-icon :icon="['fas', 'plus-circle']" class="addCourseIcon" size="4x" style="color:grey" />
      </div>

      <b-card-img v-else :src="image" alt="Image" bottom class=""></b-card-img>


    </b-card>
  </router-link>
</template>

<script>
  import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from "@fortawesome/fontawesome-svg-core";
  library.add(
    faPlusCircle,
  );
  export default {
        name: "CourseCard",
        data() {
          return {
            image: "https://sanitationsolutions.net/wp-content/uploads/2015/05/empty-image.png"
          }
        },
        components:{
          'font-awesome-icon': FontAwesomeIcon
        },
        props:{
            id:"",
            title:"",
            description:"",
            courseCategory:"",
            courseLanguages:"",
            courseDuration:"",
            url:"",
            img:""
        }
    }
</script>

<style lang="sass" scoped>
.course-card-wrapper
  color: #fefefe
  &:hover
    color: #fefefe
    text-decoration: unset
  .card
    max-width: 20rem
    border-radius: 10px
    height: 20rem

  .card-body
    background: #219678
    border-radius: 10px 10px 0 0
    max-height: 10rem
    height: 10rem
  .card-img-bottom
    flex-shrink: unset
    border-radius: 0 0 10px 10px


</style>

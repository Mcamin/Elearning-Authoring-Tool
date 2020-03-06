<template>

  <b-card class="mr-4 course-card-wrapper"
          no-body
          style="max-width: 20rem;"
  >
    <div v-if="title === 'Create a new Course'" class="card__img   d-flex justify-content-center align-items-center">
      <font-awesome-icon :icon="['fas', 'plus-circle']" class="addCourseIcon" size="4x" style="color:grey"/>
    </div>

    <b-card-img v-else :src="thumbnail" alt="Image" bottom class="card__img"></b-card-img>
    <b-card-body>
      <span class="card__category">{{courseCategory}}</span>
      <h4 class="card__title">{{title}}</h4>
      <span class=" card__lang">{{courseLanguages}}</span>
      <b-row class="mt-2">
        <b-col v-if="courseDuration">
          <font-awesome-icon class="mr-2" :icon="['fas', 'clock']"/>
          <span class="card__text">{{courseDuration}}</span>
        </b-col>
        <b-col v-if="nbrOfSections">
          <font-awesome-icon class="mr-2" :icon="['fas', 'book-open']"/>
          <span class="card__text">{{nbrOfSections}}</span>
        </b-col>
      </b-row>
    </b-card-body>
    <b-link @click="handleClick()" class="card__info-hover d-flex justify-content-center align-items-center">
      <div v-if="title !== 'Create a new Course'">
        <b-link @click.stop="handlePreview()">
          <font-awesome-icon class="card__icon" :icon="['fas', 'eye']" size="2x"/>
        </b-link>
        <b-link @click.stop="handleDuplicate()">
          <font-awesome-icon class="card__icon" :icon="['fas', 'copy']" size="2x"/>
        </b-link>
        <b-link @click.stop="handleDelete()">
          <font-awesome-icon class="card__icon" :icon="['fas', 'trash']" size="2x"/>
        </b-link>
      </div>
    </b-link>
  </b-card>
</template>

<script>


  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faTrash, faEye, faCopy, faPlusCircle, faClock, faBookOpen} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {bus} from "@/main"

  library.add(
    faPlusCircle,
    faClock,
    faBookOpen,
    faTrash,
    faCopy,
    faEye
  );

  import defaultImage from '@/assets/img/nothumbnail.png'
  import {mapActions, mapState} from "vuex";
  import {uuid} from "vue-uuid";

  export default {
    name: "CourseCard",
    components: {'font-awesome-icon': FontAwesomeIcon},
    props: {
      uuid: "",
      title: "",
      courseCategory: "",
      courseLanguages: "",
      courseDuration: "",
      url: "",
      img: "",
      nbrOfSections: ""
    },

    methods: {
      ...mapActions('course', {loadCourse: 'loadCourse', createCourse: 'createCourse'}),
      async handleClick() {
        if (this.uuid != null) {
          try {
            await this.loadCourse(this.uuid);
          } catch (er) {
            console.log(er);
          } finally {
            this.$router.push({name: 'edit-course', params: {id: this.uuid, title: this.title}});
          }
        }
      },
      async handleDuplicate() {
        let course = this.courses.find(x => x.uuid === this.uuid),
          newUuid = uuid.v1();
        //Create Course
        const payload = {
          uuid: newUuid,
          title: course.title,
          duration: course.duration,
          category: course.category,
          languages: [course.languages],
          description: course.description,
          tags: course.tags,
          thumbnail: course.thumbnail,
          contentIndex: course.contentIndex,
        };
        try {
          await this.createCourse(payload);
        } catch (er) {
          console.log(er);
        }

      },
      handlePreview() {
        this.$router.push({name:'preview',params:{id:this.uuid, title:this.title}});

      },
      handleDelete() {
        let courseMeta = {
          id: this.uuid,
          type: 'course',
          title: this.title,
          img: this.img
        };
        bus.$emit('delete-course', courseMeta);
      }
    },
    computed: {
      ...mapState('course', ['courses']),
      thumbnail() {
        return this.img ? process.env.VUE_APP_BASE_DOMAIN + '/courses/images/' + this.img : defaultImage;
      }
    }
  };
</script>
<style lang="sass">
  .course-card-wrapper
    width: 240px
    height: 360px
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1)
    background-color: #fff
    border-radius: 12px
    overflow: hidden
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1)

    &:hover
      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1)
      transform: scale(1.10, 1.10)

      .card-body
        background-color: transparent

      .card__info-hover
        opacity: 1
        background-color: rgba(255, 255, 255, 0.51)

    .card__img
      height: 160px

    .card__info-hover
      position: absolute
      padding: 16px
      width: 100%
      height: 100%
      opacity: 0
      top: 0

      .svg-inline--fa
        color: #4e4e4e

        &:hover
          color: #219678

    .card__category
      text-transform: uppercase
      font-size: 11px
      letter-spacing: 2px
      font-weight: 500
      color: #868686

    .card__title
      margin-top: 5px
      margin-bottom: 10px

    .card__lang
      font-weight: 600
      text-decoration: none
      color: #219678

    .card__icon
      vertical-align: middle
      margin: 15px

    .svg-inline--fa
      color: #219678

    .card__text
      font-size: 12px
      color: #219678
      vertical-align: text-top
      margin-left: 5px
</style>

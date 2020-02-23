<template>

  <b-card class=" mb-4 course-list-wrapper "
          no-body
          img-left
  >
    <div v-if="isCreateElement()" class="card__img   d-flex justify-content-center align-items-center">
      <font-awesome-icon :icon="['fas', 'plus-circle']" class="addCourseIcon" size="4x" style="color:grey" />
    </div>

    <b-card-img v-else :src="thumbnail" alt="Image" bottom class="card__img"></b-card-img>
    <b-card-body :class="[isCreateElement() ? 'd-flex align-items-center':'' ]">
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
    <b-link   @click="handleClick()" class="card__info-hover d-flex justify-content-end align-items-center">
      <div  v-if="! isCreateElement()">
        <b-link @click.stop="handlePreview()"><font-awesome-icon class="card__icon" :icon="['fas', 'eye']" size="2x"/></b-link>
        <b-link @click.stop="handleDuplicate()"><font-awesome-icon class="card__icon" :icon="['fas', 'copy']" size="2x"/></b-link>
        <b-link @click.stop="handleDelete()"><font-awesome-icon class="card__icon" :icon="['fas', 'trash']" size="2x"/></b-link>
      </div>
    </b-link>
  </b-card>
</template>

<script>


  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faTrash,faEye,faCopy, faEllipsisV, faClock, faBookOpen} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
    faEllipsisV,
    faClock,
    faBookOpen,
    faTrash,
    faCopy,
    faEye
  );

  import defaultImage from '@/assets/img/nothumbnail.png'
  import {mapActions} from "vuex";
  export default {
    name: "CourseList",
    components: {'font-awesome-icon': FontAwesomeIcon},
    props:{
      id:"",
      title:"",
      courseCategory:"",
      courseLanguages:"",
      courseDuration:"",
      url:"",
      img:"",
      nbrOfSections:""
    },

    methods:{
      ...mapActions('course', {loadCourse: 'loadCourse'}),
      isCreateElement(){
       return this.title === 'Create a new Course';
      },
      async handleClick(){
        if(this.id != null){
          try{
            await this.loadCourse(this.id);
          }
          catch (er) {
            console.log(er);
          } finally {
            this.$router.push({ name: 'edit-course', params: {id: this.id, title: this.title } });
          }
        }
      },
      handleDuplicate(){console.log("duplicate")},
      handlePreview(){this.$router.push({ name: 'preview' });},
      handleDelete(){console.log("delete")}
    },
    computed:{
      thumbnail() {
        return this.img===''? defaultImage : process.env.VUE_APP_BASE_DOMAIN+'/courses/images/'+this.img;
      }
    }
  };
</script>
<style lang="sass">
  .course-list-wrapper
    width: 800px
    margin-left: 130px
    height: 160px
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1)
    background-color: #fff
    border-radius: 12px

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
        opacity: 0.5
    .card__img
      height: 130px
      width: 130px
      flex-shrink: 0
      box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2)
      border-radius: 20px
      transform: translate(-80px,15px)
      overflow: hidden
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
      font-size: 13px
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

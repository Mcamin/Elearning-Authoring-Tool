<template>

  <router-link :to="url" class="card__link">
    <article class="card card--1 my-3">
        <div class="card__clock-info" v-if="courseDuration">
          <svg class="card__clock"  viewBox="0 0 24 24" >
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46
             19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97
             21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg><span class="card__time">{{courseDuration}}</span>
        </div>
      <div class="card__img"></div>
        <div v-if="title === 'Create a new Course'" class="card__img--hover" style="background-color: grey !important">
          <div class="card__info">
            <!-- <span class="card__category" v-if="courseCategory">{{courseCategory}}</span> -->
            <h3 class="card__title">{{title}}</h3>
            <span class="card__by" v-if="courseLanguages">{{courseLanguages}}</span>
          </div>
        </div>
          <div v-else class="card__img--hover">
          <div class="card__info">
            <!-- <span class="card__category" v-if="courseCategory">{{courseCategory}}</span> -->
            <h3 class="card__title">{{title}}</h3>
            <span class="card__by" v-if="courseLanguages">{{courseLanguages}}</span>
          </div>
          </div>
      <div v-if="title === 'Go To Library'" class="libraryCardbackground" v-bind:style="{ backgroundImage: 'url(' + imagelibrary + ')'}"></div>
      <div v-else-if="title === 'Go To Courses'" class="coursesCardbackground" v-bind:style="{ backgroundImage: 'url(' + imagecourses + ')'}"></div>
      <div v-else-if="title === 'Create a new Course'"><font-awesome-icon :icon="['fas', 'plus-circle']" class="addCourseIcon" size="4x" style="color:grey" /></div>
      <div v-else class="cardbackground" v-bind:style="{ backgroundImage: 'url(' + img + ')' }"></div>
    </article>
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
            image: "https://sanitationsolutions.net/wp-content/uploads/2015/05/empty-image.png",
            imagelibrary: "https://upload.wikimedia.org/wikipedia/commons/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg",
            imagecourses: "https://www.questpond.com/img/2.png"
          }
        },
        components:{
          'font-awesome-icon': FontAwesomeIcon
        },
        props:{
            id:"",
            title:"",
            courseCategory:"",
            courseLanguages:"",
            courseDuration:"",
            url:"",
            img:""
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

  .card--1 .card__img, .card--1 .card__img--hover {
    background: #219678;
  }

  .card__clock {
    width: 15px;
    vertical-align: middle;
    fill: #AD7D52;
  }
  .card__time {
    font-size: 10px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card__clock-info {
    float: right;
  }

  .card__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100px;
  }

  .card__info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card__img--hover {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 100px;
    top: 0;
  }
  .card {
    margin-right: 2px;
    height: 335px;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
    max-width: 245px;
    max-height: 335px;
  }

  .card h3 {
    color: white;
    font-size: 10px;
  }

  .card a {
    color: white;
    font-size: 8px;
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);

  }

  .card__info {
    padding: 16px 24px 24px 24px;
  }

  .card__info h3{
    font-size: 16px;
  }

  .card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: white;
  }

  .card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
  }

  .card__title h3 {
    font-size: 12px;
  }

  .card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    color: white;
  }

  .card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
  }

  .card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card__info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card__info-hover {
    opacity: 1;
  }

  .cardbackground{
    width: 100%;
    height: 80%;
    background-size: cover;
  }

  .libraryCardbackground{
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .coursesCardbackground{
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .addCourseIcon{
    margin-left: 40%;
    margin-top: 30%;
  }
</style>

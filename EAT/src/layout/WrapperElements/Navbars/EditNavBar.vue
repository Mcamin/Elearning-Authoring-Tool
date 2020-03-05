<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-brand href="#" @click="$router.go(-1)"><font-awesome-icon :icon="['fas','chevron-left']" size="lg"/></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>{{selectedLesson}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Settings</b-nav-item>
        <b-button  to="preview" size="sm" class="my-2 my-sm-0" type="submit">{{previewBtn}}</b-button>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {mapState} from "vuex";
  library.add(
    faChevronLeft,
  );
    export default {
        name: "EditNavBar",
      data(){
          return {

            previewBtn:"PREVIEW"
          }
      },
      computed:{
        ...mapState('interaction', ['currentInteraction']),
        ...mapState('lesson', ['currentLesson']),
        ...mapState('section', ['currentSection']),
        ...mapState('module', ['currentModule']),
        selectedLesson(){
          switch (this.$route.name) {
            case "edit-interaction":
              return this.currentInteraction.title;

            case "edit-lesson":
              return this.currentLesson.title;
            case "edit-module":
              return this.currentModule.title;
            case "edit-section":
              return this.currentSection.title;
            default:
              return "";
          }
        }
      },
      components:{
        'font-awesome-icon': FontAwesomeIcon
      },

    }
</script>

<style scoped>

</style>

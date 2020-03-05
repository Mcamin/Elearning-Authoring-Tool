<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-brand href="#" @click="$router.go(-1)"><font-awesome-icon :icon="['fas','chevron-left']" size="lg"/></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>{{selectedLesson}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto ">
        <b-nav-item id="edit-btn" @click="$bvToast.show('my-toast')"
                    href="#">SETTINGS</b-nav-item>
        <b-button @click="handlePreview()" size="sm" class="my-2 my-sm-0" type="submit">PREVIEW</b-button>
      </b-navbar-nav>
    </b-collapse>
    <!-- Toast for Share button -->
    <b-toast id="my-toast" variant="success" no-auto-hide solid class="toast-wrapper">
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">Edit Lesson settings</strong>
          <small class="text-muted mr-2">Close</small>
        </div>
      </template>
      Lesson Title: <b-form-input v-model="lessonTitle"></b-form-input>
      Lesson Description: <b-form-input v-model="lessonDescription"></b-form-input>
      <hr>
      <div align="right">
      <b-button size="sm" @click="hideToast('my-toast')">Cancel</b-button>
      <b-button size="sm" variant="success" @click="hideToast('my-toast')">Save</b-button>
      </div>
    </b-toast>
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
            lessonTitle: 'LTITLE',
            lessonDescription: 'LDESC',
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
              if(this.currentInteraction)
              return this.currentInteraction.title;
              break;
            case "edit-lesson":
              if(this.currentLesson)
              return this.currentLesson.title;
              break;
            case "edit-module":
              if(this.currentModule)
              return this.currentModule.title;
              break;
            case "edit-section":
              if(this.currentSection)
              return this.currentSection.title;
              break;
            default:
              return "";
          }
        }
      },
      components:{
        'font-awesome-icon': FontAwesomeIcon
      },
      methods:{
          hideToast(id){
            this.$bvToast.hide(id);
          },
        handlePreview(){
          this.$router.push({name:'preview',params:{id:this.$route.params.id, title:this.$route.params.title}});
        },
      }

    }
</script>

<style scoped>

  .submitbtn:hover{
    color: grey !important;
  }
  .navbar-dark .navbar-nav .nav-link{
    color: white !important;
  }

  .navbar-dark .navbar-nav .nav-link:hover{
    color: grey !important;
  }
</style>

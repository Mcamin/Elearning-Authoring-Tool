<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-navbar-brand href="#" @click="$router.go(-1)"><font-awesome-icon :icon="['fas','chevron-left']" size="2x"/>

        </b-navbar-brand>
        <el-divider direction="vertical" ></el-divider>
        <b-nav-item  disabled class="font-weight-bolder mt-2"><h3>{{selectedLesson}}</h3></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto ">
        <b-nav-item >SETTINGS</b-nav-item>
        <b-button @click="handlePreview()">PREVIEW</b-button>
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
        name: "EditContentNavBar",
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
        handlePreview(){
          this.$router.push({name:'preview',params:{id:this.$route.params.id}});
        },
      }

    }
</script>



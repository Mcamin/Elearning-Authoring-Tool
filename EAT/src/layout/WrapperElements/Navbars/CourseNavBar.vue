<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-brand to="/courses"><font-awesome-icon :icon="['fas','th']" size="lg"/></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>{{currentCourse.title}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto navbarstyle">
        <!-- EDIT COURSE | EDIT LESSON | EDIT QUIZ | EDIT MODULE | EDIT SECTION  -->
        <b-nav-item id="edit-btn" @click="$bvToast.show('my-toast-settings')"
                    href="#">SETTINGS</b-nav-item>
        <b-nav-item @click="$bvToast.show('my-toast')"
                    href="#">SHARE</b-nav-item>
        <b-nav-item href="#">EXPORT</b-nav-item>
        <b-nav-item href="#">PUBLISH</b-nav-item>
        <b-button @click="handlePreview()" class="my-2 my-sm-0 submitbtn" type="submit">PREVIEW</b-button>
      </b-navbar-nav>
    </b-collapse>
    <b-toast id="my-toast-settings" variant="success" no-auto-hide solid class="toast-wrapper">
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">Edit Course settings</strong>
          <small class="text-muted mr-2">Close</small>
        </div>
      </template>
      Course Title: <b-form-input v-model="currentCourse.title" ref="courseTitle"></b-form-input>
      Course Description: <b-form-input v-model="currentCourse.description" ref="courseDescription"></b-form-input>
      <hr>
      <div align="right">
        <b-button size="sm" @click="hideToast('my-toast-settings')">Cancel</b-button>
        <b-button size="sm" variant="success" @click="saveTitleDesc('my-toast-settings')">Save</b-button>
      </div>
    </b-toast>
    <!-- Toast for Share button -->
    <b-toast id="my-toast" variant="success" no-auto-hide solid class="toast-wrapper">
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">Share via LTI</strong>
          <small class="text-muted mr-2">Close</small>
        </div>
      </template>
      Provider-link: <b-form-input v-model="ltilink"></b-form-input>
      Username: <b-form-input v-model="username"></b-form-input>
      Password: <b-form-input v-model="pass"></b-form-input>
      <hr>
      <b-button size="sm" @click="generateNewCredentials()">Generate new credentials</b-button>
    </b-toast>
  </b-navbar>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faTh } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {mapState} from "vuex";
  import keygen from 'keygen'

  library.add(
    faTh,
  );

    export default {
      data() {
        return {
          courseTitle: '',
          courseDescription: 'CDESC',
          username:keygen.hex(6),
          pass: keygen.hex(9),
          ltilink: 'LINK'
        }
      },

      name: "CourseNavBar",
      components:{
        'font-awesome-icon': FontAwesomeIcon
      },
      computed:{
        ...mapState('course', ['currentCourse']),
        },
      methods:{
        handlePreview(){
          this.$router.push({name:'preview',params:{id:this.currentCourse.uuid, title:this.currentCourse.title}});
        },
        generateNewCredentials(){
          this.username = keygen.hex(6);
          this.pass = keygen.hex(9);
        },
        hideToast(id){
          this.$bvToast.hide(id);
        },
        saveTitleDesc(id){
            this.courseTitle = this.$refs['courseTitle'].value;
            this.courseDescription = this.$refs['courseDescription'].value;
            this.$bvToast.hide(id);
        }
      },
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

.toaster{
  background-color: white;
  margin-top: 18% !important;
}

</style>

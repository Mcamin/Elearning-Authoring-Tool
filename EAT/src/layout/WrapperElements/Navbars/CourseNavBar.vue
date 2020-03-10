<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-brand to="/courses"><font-awesome-icon :icon="['fas','th']" size="lg"/></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="" disabled>{{currentCourse.title}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto navbarstyle">
        <!-- EDIT COURSE | EDIT LESSON | EDIT QUIZ | EDIT MODULE | EDIT SECTION  -->
        <b-nav-item id="edit-btn" @click="$bvToast.show('my-toast-settings')"
                    href="#">SETTINGS</b-nav-item>
        <b-nav-item @click.prevent="handleShare"
                    href="#">SHARE</b-nav-item>
        <!--<b-nav-item href="#">EXPORT</b-nav-item>
        <b-nav-item href="#">PUBLISH</b-nav-item>-->
        <b-button @click="handlePreview()" class="my-2 my-sm-0 submitbtn" type="submit">PREVIEW</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faTh } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {mapState} from "vuex";
  import {bus} from "@/main";


  library.add(
    faTh,
  );

    export default {
      name: "CourseNavBar",
      data() {
        return {
          courseTitle: '',
        }
      },
      components:{
        'font-awesome-icon': FontAwesomeIcon,
      },
      computed:{
        ...mapState('course', ['currentCourse']),
        },
      methods:{
        handlePreview(){
          this.$router.push({name:'preview',params:{id:this.currentCourse.uuid, title:this.currentCourse.title}});
        },
        handleShare(){
          let metadata ={
            id: this.currentCourse.uuid,
            type: "Course"
          };
          bus.$emit('token-modal', metadata);
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

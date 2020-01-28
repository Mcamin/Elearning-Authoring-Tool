<template>



  <b-container fluid class="wrapper d-flex flex-column vh-100 px-0">
    <!--Navigation-bar-->
    <transition name="fade" mode="out-in" appear>
    <header>
        <top-navigation-bar/>
    </header>
    </transition>
      <!--End Navigation-bar-->
    <b-container fluid class="main-content px-0">

      <b-row class="h-100 mx-0">

          <!--Sidebar
 <transition v-if="isLibraryPage" name="fade" mode="out-in" appear>-->
          <el-aside class=" d-flex flex-column h-100 p-0 col-2" v-if="isLibraryPage || isLNewCoursePage"><Sidebar/></el-aside>
          <!--</transition>
  End Sidebar-->


            <el-main class="h-100 p-0">
              <!--Main-Wrapper-->
              <dashboard-content/>
              <!--End Main-Wrapper-->
            </el-main>


      </b-row>
      <el-footer>
        <!--Footer-->
        <transition name="fade" mode="out-in" appear>
          <content-footer/>
        </transition>
        <!--End Footer-->
      </el-footer>
    </b-container>




  </b-container>
</template>
<script>

  import ContentFooter from "./WrapperElements/ContentFooter.vue";
  import TopNavigationBar from "./WrapperElements/TopNavBar";
  import DashboardContent from "./WrapperElements/ContentWrapper.vue";
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import Sidebar from "./WrapperElements/Sidebar";
  import {checkRouter} from "../plugins/helpers";

  export default {
    components: {
      VuePerfectScrollbar,
      ContentFooter,
      Sidebar,
      DashboardContent,
      TopNavigationBar,


    },
    methods: {},
    computed: {
      isLibraryPage() {
        return checkRouter(this.$route.name, "library");
      },
      isLNewCoursePage() {
        return checkRouter(this.$route.name, "newcourse");
      }
    }
  };
</script>

<style>
</style>

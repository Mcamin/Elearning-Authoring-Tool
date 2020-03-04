<template>
  <b-container fluid class="wrapper d-flex flex-column vh-100 px-0">
    <!--Navigation-bar-->
    <transition name="fade" mode="out-in" appear>

        <top-navigation-bar/>

    </transition>
    <!--End Navigation-bar-->
    <b-container fluid class="main-content px-0">

      <b-row class="h-100 mx-0">


        <!--Sidebar-->
        <transition v-if="isLibraryPage" name="fade" mode="out-in" appear>
          <template >
            <Sidebar/>
          </template>
        </transition>
        <!--End Sidebar-->



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

    import ContentFooter from "./WrapperElements/Footer.vue";
    import TopNavigationBar from "./WrapperElements/Header";
    import DashboardContent from "./WrapperElements/ContentWrapper.vue";
    import Sidebar from "./WrapperElements/Sidebar";
    import {checkRouter} from "@/utils/helpers";

    export default {
        components: {
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
            isEditCoursePage() {
                return checkRouter(this.$route.name, "edit-course");
            },
            isEditInteractionPage() {
                return checkRouter(this.$route.name, "edit-interaction");
            }
        }
    };
</script>

<style lang="sass">
  .main-content
    height: calc(100vh - 140px)
</style>

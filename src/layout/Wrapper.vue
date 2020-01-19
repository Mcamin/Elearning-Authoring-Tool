<template>
  <main>
    <!--Navigation-bar-->
    <transition name="fade" mode="out-in" appear>
      <top-navigation-bar/>
    </transition>
    <!--End Navigation-bar-->

    <!--Sidebar-->
    <transition v-if="isLibraryPage" name="fade" mode="out-in" appear>
      <Sidebar/>
    </transition>
    <!--End Sidebar-->

    <!--Main-Wrapper-->
    <dashboard-content/>
    <!--End Main-Wrapper-->

    <!--Footer-->
    <transition name="fade" mode="out-in" appear>
      <content-footer/>
    </transition>
    <!--End Footer-->


  </main>
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
      }
    }
  };
</script>

<style>
</style>

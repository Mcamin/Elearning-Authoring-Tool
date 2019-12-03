<template>
  <div class="wrapper">
    <div class="main-panel">
     <!-- <transition name="fade" mode="out-in" appear>
        <Sidebar />
      </transition>-->
      <top-navbar></top-navbar>
      <dashboard-content>
      </dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>

import ContentFooter from "./WrapperElements/ContentFooter.vue";
import TopNavbar from "./WrapperElements/TopNavBar";
import DashboardContent from "./WrapperElements/ContentWrapper.vue";
import MobileMenu from "./WrapperElements/MobileMenu";
//import Sidebar from "./WrapperElements/Sidebar";
export default {
  components: {
      ContentFooter,
  //    Sidebar,
      DashboardContent,
      TopNavbar,
      MobileMenu

  },
  methods: {
  }
};
</script>

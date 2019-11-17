<template>
  <div class="wrapper">
    <div class="main-panel">
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
export default {
  components: {
    ContentFooter,
    DashboardContent,
      TopNavbar,
      MobileMenu

  },
  methods: {
  }
};
</script>

<template>

    <div class="main-panel ">
 <transition name="fade" mode="out-in" appear>
        <!--<Sidebar />-->
      </transition>
      <top-navigation-bar/>
      <dashboard-content>
      </dashboard-content>
      <content-footer/>
  </div>
</template>
<style lang="scss">
</style>
<script>

import ContentFooter from "./WrapperElements/ContentFooter.vue";
import TopNavigationBar from "./WrapperElements/TopNavBar";
import DashboardContent from "./WrapperElements/ContentWrapper.vue";

//import Sidebar from "./WrapperElements/Sidebar";
export default {
components: {
    ContentFooter,
//    Sidebar,
    DashboardContent,
    TopNavigationBar,


},
methods: {
}
};
</script>

<template>
  <main>
    <!--Navigation-bar-->
    <transition name="fade" mode="out-in" appear>
   <top-navigation-bar/>
    </transition>
    <!--end Navigation-bar-->

    <!--Sidebar-->
    <transition name="fade" mode="out-in" appear>
   <Sidebar/>
    </transition>
    <!--end Sidebar-->

    <!--Main-Wrapper-->
          <dashboard-content/>
    <!--end Main-Wrapper-->

    <!--Footer-->
    <transition name="fade" mode="out-in" appear>
      <content-footer/>
    </transition>
    <!--end Footer-->



  </main>
</template>
<style lang="scss">
</style>
<script>

import ContentFooter from "./WrapperElements/ContentFooter.vue";
import TopNavigationBar from "./WrapperElements/TopNavBar";
import DashboardContent from "./WrapperElements/ContentWrapper.vue";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import Sidebar from "./WrapperElements/Sidebar";
export default {
components: {
    VuePerfectScrollbar,
    ContentFooter,
    Sidebar,
    DashboardContent,
    TopNavigationBar,


},
methods: {
}
};
</script>

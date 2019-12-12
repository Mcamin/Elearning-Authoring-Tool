<template>

    <main class=" container-fluid p-0 vh-100   bg-dark">
 <transition name="fade" mode="out-in" appear>

 </transition>
      <top-navigation-bar/>
      <b-container fluid class="h-100">
        <b-row class=" justify-content-center h-100">
          <Sidebar/>

          <b-col class="h-100 d-flex align-self-stretch bg-info">
            <dashboard-content/>
          </b-col>
        </b-row>
      </b-container>
      <content-footer/>
  </main>
</template>
<style lang="scss">
</style>
<script>

import ContentFooter from "./WrapperElements/ContentFooter.vue";
import TopNavigationBar from "./WrapperElements/TopNavBar";
import DashboardContent from "./WrapperElements/ContentWrapper.vue";

import Sidebar from "./WrapperElements/Sidebar";
export default {
components: {
    ContentFooter,
    Sidebar,
    DashboardContent,
    TopNavigationBar,


},
methods: {
}
};
</script>

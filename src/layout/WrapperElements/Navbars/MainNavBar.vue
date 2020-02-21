<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-brand to="/">

      <b-img :src="logoPath" fluid alt="Hello"/>
    </b-navbar-brand>
    <el-divider direction="vertical" ></el-divider>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Breadcrumb -->
      <b-navbar-nav>
        <b-nav-item href="#" disabled>{{IsPage}}</b-nav-item>
      </b-navbar-nav>
      <!-- End Breadcrumb -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Profile -->
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- End Profile -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import {checkRouter} from "@/utils/helpers"
  import logo from "@/assets/img/logo.png"
    export default {
        name: "MainNavBar",
      data(){
          return {
            logoPath: logo,
            title:{
              home: "DASHBOARD",
              courses: "COURSES",
              library: "LIBRARY",
            }
          }
      },
      computed:{
          /**
           * @return {string}
           */
          IsPage(){
            if(checkRouter(this.$route.name, "library"))
            return this.title.library;
            else if (checkRouter(this.$route.name, "home"))
              return  this.title.home;
            else
              return this.title.courses;
          }
      }

    }
</script>

<style lang="sass" scoped>
  .navbar-brand
    max-height: 3.5rem
    max-width: 3.5rem

</style>

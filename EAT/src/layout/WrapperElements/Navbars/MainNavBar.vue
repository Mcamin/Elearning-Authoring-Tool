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
        <b-nav-item  class="font-weight-bolder mt-2" disabled><h3>{{IsPage}}</h3></b-nav-item>
      </b-navbar-nav>
      <!-- End Breadcrumb -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Profile -->

      <b-nav-item-dropdown  size="lg"   right text="Right align" variant="link" toggle-class="text-decoration-none" no-caret>
      <template v-slot:button-content>
        <div>
          <b-img :src="avatar"  class="avatar"/><span class="sr-only">User</span>
        </div>

      </template>
      <b-dropdown-item href="">Profile</b-dropdown-item>
      <b-dropdown-item href="">Sign Out</b-dropdown-item>
    </b-nav-item-dropdown>
        <!-- End Profile -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
   import {checkRouter} from "@/utils/helpers"
   import logo from "@/assets/img/logo.png"
   import avatar from"@/assets/img/avatars.png"
    export default {
        name: "MainNavBar",
      data(){
          return {
            avatar: avatar,
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

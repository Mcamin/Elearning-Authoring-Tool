<template>
  <header class="header-wrapper" >
    <b-navbar toggleable="lg" type="dark"  sticky class="mx-lg-4">
      <b-navbar-brand href="#">LOGO</b-navbar-brand>
      <el-divider direction="vertical" ></el-divider>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">CourseName</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- EDIT COURSE | EDIT LESSON | EDIT QUIZ | EDIT MODULE | EDIT SECTION  -->
          <b-nav-item href="#">SETTINGS</b-nav-item>
          <b-nav-item href="#">SHARE</b-nav-item>
          <b-nav-item href="#">EXPORT</b-nav-item>
          <b-nav-item href="#">PUBLISH</b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">PREVIEW</b-button>

          <!-- EXPORT  -->
          <b-nav-item href="#">CANCEL</b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">EXPORT</b-button>

          <!-- PREVIEW  -->
          <b-button size="sm" class="my-2 my-sm-0" type="submit">EDIT</b-button>
          <!-- SETTINGS  -->
          <b-button size="sm" class="my-2 my-sm-0" type="submit">CLOSE</b-button>


          <!-- Profile : Home | Courses | Library  -->
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

  </header>
</template>

<script>
    import Breadcrumb from "./TopNavElements/Breadcrumb";
    import CourseMenu from "./TopNavElements/CourseMenu";
    import ModuleMenu from "./TopNavElements/ModuleMenu";
    import DefaultMenu from "./TopNavElements/DefaultMenu";
    import {checkRouter} from "../../plugins/helpers"
/*      <!--Left BreadCrumb Menu -->
      <Breadcrumb/>
      <!--End Left BreadCrumb Menu -->

      <!--Right Menu Toggler -->
      <b-navbar-toggle target="nav-collapse"/>
      <!--End Right Menu Toggler -->

      <!--Right Collapsible Menu  -->
      <b-collapse id="nav-collapse" is-nav>

        <!-- Course  Menu --->
        <CourseMenu v-if="isCoursePage"/>
        <!-- End Course Menu --->

        <!-- Module Menu --->
        <ModuleMenu v-else-if="isModulePage"/>
        <!-- End Module Menu --->
        <!--  Default Menu --->
        <DefaultMenu v-else/>
        <!-- End Default Menu --->
      </b-collapse>
      <!--End Right Collapsible Menu  -->
      */

    export default {
        name: "Header",
        components: {
          CourseMenu,
          Breadcrumb,
          ModuleMenu,
          DefaultMenu
        },
      computed:{
        isCoursePage(){
            return checkRouter(this.$route.name,'newcourse');
          },
        isModulePage(){
          return checkRouter(this.$route.name,'addlesson') ||
            checkRouter(this.$route.name,'addquiz') ||
            checkRouter(this.$route.name,'addgloassary');
        }


      }
    }
</script>

<style lang="css" >


</style>

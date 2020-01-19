<template>
    <b-navbar toggleable="lg" type=""   class ="px-lg-5" sticky>
      <!--Left BreadCrumb Menu -->
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
    </b-navbar>
</template>

<script>
    import Breadcrumb from "./TopNavElements/Breadcrumb";
    import CourseMenu from "./TopNavElements/CourseMenu";
    import ModuleMenu from "./TopNavElements/ModuleMenu";
    import DefaultMenu from "./TopNavElements/DefaultMenu";
    import {checkRouter} from "../../plugins/helpers"


    export default {
        name: "TopNavBar",
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
  .navbar{
    background: #219678;
  }

</style>

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
        <CourseMenu v-if="isCoursePage"/>
        <ModuleMenu v-else-if="isModulePage"/>
        <DefaultMenu v-else/>
      </b-collapse>
      <!--End Right Collapsible Menu  -->
    </b-navbar>
</template>

<script>
    import Breadcrumb from "./TopNavElements/Breadcrumb";
    import CourseMenu from "./TopNavElements/CourseMenu";
    import ModuleMenu from "./TopNavElements/ModuleMenu";
    import DefaultMenu from "./TopNavElements/DefaultMenu";
    import checkRouter from "./utils/helpers"


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
            return checkRouter('course');
          },
        isModulePage(){
          return checkRouter('course');
        }

      }
    }
</script>

<style lang="css" >
  .navbar{
    background: #219678;
  }

</style>

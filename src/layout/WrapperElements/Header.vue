<template>
  <header class="header-wrapper">
      <CourseNavBar v-if="isEditCourse" />
     <EditNavBar  v-else-if= "isEditContent" />
     <ExportNavBar  v-else-if="isExport"/>
    <PreviewNavBar v-else-if="isPreview"/>
    <MainNavBar  v-else />
  </header>
</template>

<script>

    import {checkRouter} from "@/utils/helpers"
    import MainNavBar from "./Navbars/MainNavBar";
    import CourseNavBar from "./Navbars/CourseNavBar";
    import EditNavBar from "./Navbars/EditNavBar";
    import ExportNavBar from "./Navbars/ExportNavBar";
    import PreviewNavBar from "./Navbars/PreviewNavBar";


    export default {
        name: "Header",
        components: {
          PreviewNavBar,
          ExportNavBar,
          EditNavBar,
          CourseNavBar,
          MainNavBar

        },
      computed:{
        isEditCourse(){
            return checkRouter(this.$route.name,'edit-course');
          },
        isEditContent(){
          return checkRouter(this.$route.name,'edit-lesson') ||
            checkRouter(this.$route.name,'edit-interaction') ||
            checkRouter(this.$route.name,'edit-glossary');
        },
        isExport(){
          return checkRouter(this.$route.name,'export');
        },
        isPreview(){
          return checkRouter(this.$route.name,'preview')
        },


      }
    }
</script>

<style lang="css" >


</style>

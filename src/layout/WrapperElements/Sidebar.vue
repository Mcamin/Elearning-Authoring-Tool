<template>
  <el-aside class=" d-flex flex-column h-100 p-0 col-2" >
    <LibraryElements/>
    <template v-if="isLibraryPage">
<!--      <LibraryElements/>-->
    </template>
  </el-aside>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
    import LibraryElements from "./SideBarElements/LibraryElements";
    import {checkRouter} from "../../plugins/helpers";

    export default {
        components: {
          LibraryElements,

        },
      computed:{
        isLibraryPage() {
          return checkRouter(this.$route.name, "library");
        },
        isLNewCoursePage() {
          return checkRouter(this.$route.name, "edit-course");
        }
      }
    }
</script>


<style>
</style>

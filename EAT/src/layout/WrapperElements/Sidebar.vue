<template>
  <el-aside class=" d-flex flex-column h-100 p-0 col-3" >

    <template>
      <LibraryElements/>
    </template>
  </el-aside>
</template>

<script>


    import LibraryElements from "./SideBarElements/LibraryElements";
    import {checkRouter} from "@/utils/helpers";

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

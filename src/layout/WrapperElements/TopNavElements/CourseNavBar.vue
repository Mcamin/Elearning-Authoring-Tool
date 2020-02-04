<template>
  <b-navbar toggleable="lg"  sticky>
    <b-container fluid class="mx-0 h-100">
      <b-row  class="d-flex flex-grow-1 h-100">
        <b-col class="d-flex align-content-center flex-wrap">
          <b-navbar-brand href="#">Menu Icon</b-navbar-brand>

          [Menu Icon | nothing] | [Divider| nothing] | [Course Name| Course Preview]
        </b-col>
        <b-col  class="d-flex align-content-center flex-wrap ">
          <div class="ml-auto"> </div>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script>
    import {checkRouter} from "@/plugins/helpers";

    export default {
        name: "CourseNavBar",
        computed: {
            isPreview() {
                return    checkRouter(this.$route.name,'preview');
            }
        }
    }
</script>

<style scoped>

</style>

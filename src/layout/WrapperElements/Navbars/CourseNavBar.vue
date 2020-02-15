<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-brand href="#">Menu Icon</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>CourseName</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- EDIT COURSE | EDIT LESSON | EDIT QUIZ | EDIT MODULE | EDIT SECTION  -->
        <b-nav-item href="#">SETTINGS</b-nav-item>
        <b-nav-item href="#">SHARE</b-nav-item>
        <b-nav-item href="#">EXPORT</b-nav-item>
        <b-nav-item href="#">PUBLISH</b-nav-item>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">PREVIEW</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>


    export default {
        name: "CourseNavBar"
    }
</script>

<style scoped>

</style>

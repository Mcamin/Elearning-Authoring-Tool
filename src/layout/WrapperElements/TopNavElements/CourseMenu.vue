<template>
  <b-navbar-nav class="course-nav-wrapper ml-auto">
    <b-nav-item href="#">{{settings}}</b-nav-item>
    <b-nav-item href="#">{{share}}</b-nav-item>
    <b-nav-item href="#">{{exportLink}}</b-nav-item>
    <b-nav-item href="#">{{importLink}}</b-nav-item>
    <b-button class="mx-1" type="submit">{{preview}}</b-button>
  </b-navbar-nav>
</template>

<script>
    export default {
        name: "CourseMenu",
      data(){
          return {
            settings: 'SETTINGS',
            share: 'SHARE',
            exportLink: 'EXPORT',
            importLink: 'IMPORT',
            preview:'PREVIEW'
          }
      }
    }
</script>

<style scoped>

</style>

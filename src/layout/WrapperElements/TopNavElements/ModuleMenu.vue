<template>
  <div class="module-nav-wrapper ml-auto">
    <b-nav-text class="mr-4" >{{courseState}}</b-nav-text>
    <b-button class="mx-1" type="submit">PUBLISH</b-button>
    <b-button class="mx-1" type="submit">PREVIEW</b-button>
  </div>
</template>

<script>
    export default {
        name: "CourseMenu",
      data(){
        return {
          courseState:"Draft | Changes were Saved"
        }
      }
    }
</script>

<style scoped>

</style>

<template>
  <div class="module-nav-wrapper ml-auto">
    <b-nav-text class="mr-4" >{{courseState}}</b-nav-text>
    <b-button class="mx-1" type="submit" @click.prevent="saveLesson">{{publish}}</b-button>
    <b-button class="mx-1" type="submit">{{preview}}</b-button>
  </div>
</template>

<script>

    import {bus} from "@/main";

    export default {
      name: "CourseMenu",
      data(){
        return {
          publish:'PUBLISH',
          preview:'PREVIEW',
          courseState:"Draft | Changes were Saved"
        }
      },
      methods: {
        saveLesson: () => {
          bus.$emit('saveLesson');
        }
      }
    }
</script>

<style scoped>

</style>

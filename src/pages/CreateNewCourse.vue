<template>
  <div>New Course Title: {{ getNewCourse }}</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getNewCourse'
      ])
    }
  };
</script>

<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>


  import {mapActions} from "vuex";

  export default {
    name: 'app',
    methods: {
      ...mapActions([
        'loadCategories', 'loadLanguages'
      ])
    },
    mounted() {
      this.loadCategories();
      this.loadLanguages();
    }
  }

</script>

<style lang="scss">

</style>

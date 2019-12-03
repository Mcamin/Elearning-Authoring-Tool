<template>
  <div id="app">
      <router-view :key="path"></router-view>
  </div>
</template>

<script>
    import * as $route from "vue-router";
    export default {
        data:{
            path:$route.fullPath
        },
        name: 'app',
        components: {

        }
    }
</script>
<style lang="scss">
</style>

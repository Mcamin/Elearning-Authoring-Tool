<template>
  <el-menu
    default-active="2"
    class=" flex-fill  pt-5">
    <el-menu-item-group title="CONTENT">
      <el-menu-item class="ml-5" index="1">LESSONS</el-menu-item>
      <el-menu-item class="ml-5" index="2">QUIZZES</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="STRUCTURE">
      <el-menu-item class="ml-5" index="3">LEARNING UNITS</el-menu-item>
      <el-menu-item class="ml-5" index="4">LEARNING FIELDS</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
  export default {
    name: "LibraryElements",
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="sass">
  .el-menu-item-group__title
    color: #504D4D !important
    font-weight: bold
    font-size: 16px !important
    font-family: Arial, Helvetica, sans-serif !important
  .el-menu-item
    color: #504D4D !important
    font-size: 16px !important
  .el-menu-item.is-active
    color: #219678 !important


</style>

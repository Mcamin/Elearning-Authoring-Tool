<template>
  <el-menu
    default-active="1"
    @select="handleSelect"
    class=" flex-fill  pt-5 library-menu-wrapper">
    <el-menu-item-group title="CONTENT">
      <el-menu-item class="pl-5" index="1">LESSONS</el-menu-item>
      <el-menu-item class="pl-5" index="2">QUIZZES (Interactions)</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="STRUCTURE">
      <el-menu-item class="pl-5" index="3">LEARNING UNITS (Modules)</el-menu-item>
      <el-menu-item class="pl-5" index="4">LEARNING FIELDS (Sections)</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
  import {bus} from "@/main"
  export default {
    name: "LibraryElements",
    data() {
      return {
      };
    },
    methods: {
        handleSelect(key) {
            bus.$emit('render-lib-content',key);
        }
    }
  }
</script>

<style lang="sass">
  .library-menu-wrapper
    .el-menu-item-group__title
      color: #504D4D
      font-weight: bold
      font-size: 16px
    .el-menu-item
      color: #504D4D
      font-size: 16px
      &:hover
        background-color: rgba(33, 150, 120, 0.31)
        color: #fff
      &:focus
        background-color: transparent
    .el-menu-item.is-active
      color: #219678 !important


</style>

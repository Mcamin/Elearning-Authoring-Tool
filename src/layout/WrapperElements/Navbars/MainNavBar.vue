<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="mx-lg-4">
    <b-navbar-brand href="#">LOGO</b-navbar-brand>
    <el-divider direction="vertical" ></el-divider>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Dashboard |Library | Welcome Page </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Profile : Home | Courses | Library  -->
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- End Profile -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
    export default {
        name: "MainNavbar"
    }
</script>

<style scoped>

</style>

<template>
  <b-navbar toggleable="lg" type="dark"  sticky class="px-lg-4">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="" disabled>{{this.$route.params.id}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- PREVIEW  -->

        <b-button @click="handleClick">BACK</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import {library} from "@fortawesome/fontawesome-svg-core";

  library.add(
    faChevronLeft,
  );

  export default {
      name: "PreviewNavBar",
      methods:{
          handleClick(){
            this.$router.go(-1)
          }
      },

    }
</script>


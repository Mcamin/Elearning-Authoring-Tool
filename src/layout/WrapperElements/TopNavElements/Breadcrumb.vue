<template>
  <div class="breadcrumb-nav-wrapper">

  <!--Home Button-->
    <router-link to="/">
      <font-awesome-icon :icon="['fas', 'th-large']" size="lg" />
    </router-link>
  <!--End Home Button-->

  <!--Breadcrumb Button-->

  <!-- End Breadcrumb Button-->
    <b-breadcrumb :items="getBreadcrumbItems"/>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faThLarge,faSearch,faBell} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


  library.add(
    faThLarge,
  );
    export default {
        name: "Breadcrumb",
      components:{
        'font-awesome-icon': FontAwesomeIcon,
      },
      methods:{
        capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        },
      },
      computed: {
        getBreadcrumbItems() {
          return this.$route.meta.breadcrumb;
      },
    }}
</script>

<style scoped>
  a{
    color: white;
  }
</style>

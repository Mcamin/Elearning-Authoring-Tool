<template>
  <div class="breadcrumb-nav-wrapper">

  <!--Home Button-->
    <router-link to="/">
      <font-awesome-icon :icon="['fas', 'th-large']" size="lg" />
    </router-link>
  <!--End Home Button-->

  <!--Breadcrumb Button-->
  <b-navbar-brand href="#" class="ml-2" v-if="routeName!=='Newcourse'">{{routeName}}</b-navbar-brand>
    <b-navbar-brand href="#" class="ml-2" v-else>{{this.$store.state.course.title}}</b-navbar-brand>
  <!-- End Breadcrumb Button-->

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
        routeName() {
          const { name } = this.$route;
          return this.capitalizeFirstLetter(name);
        }
      },
    }
</script>

<style scoped>
  a{
    color: white;
  }
</style>

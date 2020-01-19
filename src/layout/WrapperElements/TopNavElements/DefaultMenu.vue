<template>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-button size="sm" v-if="routeName ==='Addlesson'" @click.prevent="saveCourse()" class="my-2" type="submit" >Save</b-button>
      <b-nav-item id="search-button" data-toggle="modal" data-target="#searchModal" @click="">
        <font-awesome-icon :icon="['fas', 'search']" size="lg" />
      </b-nav-item>
      <modal :show.sync="searchModalVisible"
             class="modal-search"
             id="searchModal"
             :centered="false"
             :show-close="true">
        <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
      </modal>
      <b-nav-item-dropdown no-caret	 text="" right>
        <template slot="button-content">
          <font-awesome-icon :icon="['fas', 'bell']" size="lg" />
        </template>
        <b-dropdown-item href="#">Notifcation 1</b-dropdown-item>
        <b-dropdown-item href="#">Notification 2</b-dropdown-item>
        <b-dropdown-item href="#">Notifcation 3</b-dropdown-item>
        <b-dropdown-item href="#">Notification 4</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="" right>
        <template slot="button-content">
          <span>User</span>
          <!-- <div class="photo"><img src="img/anime3.png"></div>-->
        </template>
        <b-dropdown-item router-link to="/profile"> MY PROFILE</b-dropdown-item>
        <b-dropdown-item router-link to="/library">LIBRARY</b-dropdown-item>
        <b-dropdown-item router-link to="/settings">SETTINGS</b-dropdown-item>
        <b-dropdown-item router-link to="/login">LOGOUT</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSearch,faBell} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


  library.add(
    faSearch,
    faBell
  );
    export default {
        name: "AddLessonNavElm"
    }
</script>

<style scoped>

</style>

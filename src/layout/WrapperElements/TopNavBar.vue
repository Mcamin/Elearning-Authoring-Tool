<template>

    <b-navbar toggleable="lg" type="dark"   class ="px-lg-5" sticky>

      <router-link to="/">
        <font-awesome-icon :icon="['fas', 'th-large']" size="lg" />
      </router-link>
      <b-navbar-brand href="#" class="ml-2" v-if="routeName!=='Newcourse'">{{routeName}}</b-navbar-brand>
      <b-navbar-brand href="#" class="ml-2" v-else>{{getNewCourse.course.title}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"/>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="search-button" data-toggle="modal" data-target="#searchModal" @click="searchModalVisible = true">
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
      </b-collapse>
    </b-navbar>
</template>

<script>
    import { CollapseTransition } from 'vue2-transitions';
    import Modal from '@/components/Modals/SearchModal';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faThLarge,faSearch,faBell} from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import {mapGetters} from "vuex";

    library.add(
        faThLarge,
        faSearch,
        faBell
    );

    export default {
        name: "TopNavBar",
        components: {
            CollapseTransition,
            Modal,
            'font-awesome-icon': FontAwesomeIcon,
        },
        computed: {
            ...mapGetters([
              'getNewCourse'
            ]),
            routeName() {
                const { name } = this.$route;
                  return this.capitalizeFirstLetter(name);
            }
        },
        data() {
            return {
                coursetitle: getNewCourse,
                activeNotifications: false,
                showMenu: false,
                searchModalVisible: false,
                searchQuery: ''
            };
        },
        methods: {
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            toggleNotificationDropDown() {
                this.activeNotifications = !this.activeNotifications;
            },
            closeDropDown() {
                this.activeNotifications = false;
            },
            toggleMenu() {
                this.showMenu = !this.showMenu;
            }
        }
    }
</script>

<style lang="css" >
  .navbar
  {
    width: 100%;
    z-index: 1050;
    background: #219678;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: 280px;
    height: 60px;
    -webkit-transition: all .2s;
    transition: all .2s;
  color: white}
  .navbar >a{
    color: white!important;
  }


</style>

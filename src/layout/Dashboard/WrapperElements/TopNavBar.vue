<template>

    <b-navbar toggleable="lg" type="dark"  sticky>
      <b-navbar-brand href="#">{{routeName}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="search-button" data-toggle="modal" data-target="#searchModal" @click="searchModalVisible = true"> <i class="tim-icons icon-zoom-split"></i>
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
              <i class="tim-icons icon-sound-wave"></i>
            </template>
            <b-dropdown-item href="#">Notifcation 1</b-dropdown-item>
            <b-dropdown-item href="#">Notification 2</b-dropdown-item>
            <b-dropdown-item href="#">Notifcation 3</b-dropdown-item>
            <b-dropdown-item href="#">Notification 4</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="" right>
            <template slot="button-content">
              <div class="photo"><img src="img/anime3.png"></div>
            </template>
            <b-dropdown-item router-link to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

</template>

<script>
    import { CollapseTransition } from 'vue2-transitions';
    import Modal from '@/components/Modal';
    export default {
        name: "TopNavBar",
        components: {
            CollapseTransition,
            Modal
        },
        computed: {
            routeName() {
                const { name } = this.$route;
                return this.capitalizeFirstLetter(name);
            }
        },
        data() {
            return {
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

<style scoped>

</style>

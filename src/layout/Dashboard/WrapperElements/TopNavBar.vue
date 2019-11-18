<template>
  <b-container fluid class="navbar">
      <!--Mobile Menu -->
    <a class="navbar-brand" href="#">{{routeName}}</a>
      <collapse-transition>


        <b-nav align="right" class="ml-auto">
      <b-nav-item id="search-button" data-toggle="modal" data-target="#searchModal" @click="searchModalVisible = true"> <i class="tim-icons icon-zoom-split"></i>
      </b-nav-item>
      <modal :show.sync="searchModalVisible"
             class="modal-search"
             id="searchModal"
             :centered="false"
             :show-close="true">
        <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
      </modal>
      <b-nav-item><i class="tim-icons icon-sound-wave"></i></b-nav-item>
      <b-nav-item > <i class="tim-icons icon-single-02"></i></b-nav-item>
    </b-nav>
      </collapse-transition>
  </b-container>
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

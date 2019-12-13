<template>
  <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
    <div class="app-header__logo">
      <div class="logo-src"/>
      <div class="header__pane ml-auto">
        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
        </button>
      </div>
    </div>
    <div class="app-sidebar-content">
      <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
        <sidebar-menu showOneChild :menu="menu"/>
      </VuePerfectScrollbar>
    </div>

  </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        header: true,
                        title: 'Content',
                    },
                    {
                        title: 'Lessons',
                        icon: 'pe-7s-notebook',
                        href: '/lessonsLibrary'

                    },
                    {
                        title: 'Quizzes',
                        icon: 'pe-7s-note',
                        href: '/quizzeslibrary',

                    },
                    {
                        header: true,
                        title: 'Structure',
                    },
                    {
                        title: 'Learning Units',
                        icon: 'pe-7s-folder',
                        href: '/learningunits'

                    },
                    {
                        title: 'Learning Fields',
                        icon: 'pe-7s-global',
                        href: '/learningfields',

                    },
                ],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,
        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>


<style>
  .app-sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 20;
    overflow: hidden;
    width: 280px;
    position: fixed;
    aheight: 100vh;
    -webkit-box-shadow: 7px 0 60px rgba(0, 0, 0, 0.05);
    box-shadow: 7px 0 60px rgba(0, 0, 0, 0.05);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    padding: 60px 0 0;
  }
</style>

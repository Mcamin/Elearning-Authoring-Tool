<template>
    <div   class="app-main__outer pb-5">
        <fade-transition :duration="100" mode="out-in">
            <!-- your content here -->
            <router-view/>
        </fade-transition>
    </div>
</template>
<script>
    import {FadeTransition} from 'vue2-transitions';
    export default {
        components: {
            FadeTransition
        }
    };
</script>

<style>
  .app-main__outer {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 8;
   /* padding: 0px 0 0 280px;*/
    -webkit-transition: all .2s;
    transition: all .2s;
  }
</style>

<template>
    <main  class="content p-5 container-fluid   bg-success">
        <fade-transition :duration="100" mode="out-in">
            <!-- your content here -->
            <router-view></router-view>
        </fade-transition>
    </main>
</template>
<script>
    import {FadeTransition} from 'vue2-transitions';
    export default {
        components: {
            FadeTransition
        }
    };
</script>

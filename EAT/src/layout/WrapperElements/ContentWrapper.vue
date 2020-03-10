<template>
        <fade-transition :duration="100" mode="out-in">
            <!-- your content here -->
            <router-view/>
        </fade-transition>
</template>
<script>
    import {FadeTransition} from 'vue2-transitions';
    export default {
        components: {
            FadeTransition
        }
    };
</script>

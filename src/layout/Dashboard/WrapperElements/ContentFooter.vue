<template>
  <footer class="footer">
    <b-container fluid>
      <div class="copyright">
        © <a href="https://www.fokus.fraunhofer.de/en" target="_blank" rel="noopener">Fraunhofer FOKUS {{year}}</a>
      </div>
      <b-nav>
        <b-nav-item  href="/"> <font-awesome-icon :icon="['fab','facebook']" size="lg"/></b-nav-item>
        <b-nav-item  href="/"> <font-awesome-icon :icon="['fab','twitter']" size="lg"/></b-nav-item>
      </b-nav>

    </b-container>
  </footer>
</template>
<style>

</style>
<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(
        faFacebook,
        faTwitter,
    );
    export default {
        components:{
            'font-awesome-icon': FontAwesomeIcon
        },
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    };
</script>

<style lang="scss">
</style>

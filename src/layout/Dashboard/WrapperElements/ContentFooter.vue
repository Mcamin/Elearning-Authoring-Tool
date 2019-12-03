<template>
    <b-container fluid style="background-color:teal" >
      <footer class="footer pt-4 pb-4 pl-2 pr-2"   >
      <b-row>
        <b-col cols="12"sm="6">
          <div class="copyright">
            © <a href="https://www.fokus.fraunhofer.de/en" target="_blank" rel="noopener">Fraunhofer FOKUS {{year}}</a>
          </div>
        </b-col>
       <b-col cols="12"sm="6">
         <b-nav>
         <b-nav-item  href="/"> <font-awesome-icon :icon="['fab','facebook']" size="lg"/></b-nav-item>
         <b-nav-item  href="/"> <font-awesome-icon :icon="['fab','twitter']" size="lg"/></b-nav-item>
       </b-nav>
       </b-col>

      </b-row>
      </footer>
    </b-container>

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

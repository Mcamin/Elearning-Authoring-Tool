<template>
  <b-container fluid class="h-100 ">
      <b-row align-v="center" class="h-100">
        <b-col  md="6" sm="12">
          <div class="copyright text-center float-lg-left">
           <a href="https://www.fokus.fraunhofer.de/en" target="_blank" rel="noopener"> ©  Fraunhofer FOKUS {{year}}</a>
          </div>
        </b-col>
       <b-col md="6" sm="12" >
         <b-nav align="center" class="float-lg-right" >
         <b-nav-item  href="#"> <font-awesome-icon :icon="['fab','facebook']" size="lg"/></b-nav-item>
         <b-nav-item  href="#"> <font-awesome-icon :icon="['fab','twitter']" size="lg"/></b-nav-item>
       </b-nav>
       </b-col>
      </b-row>
    </b-container>

</template>

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


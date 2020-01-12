<!-- TODO:
Add the default section to the sections -->
<template>
  <b-container fluid class=" mt-5  px-5 ">
    <p>TITLE: {{ this.$store.state.course.title }} </p>
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <!-- Add  course Accordion-->
        <Accordion/>
        <b-button block  href="#" v-b-modal="'add-unit'">
          <font-awesome-icon :icon="['fas', 'plus-circle']" size="2x" />
        </b-button>
        <!--End  Add  course Accordion-->
        <!-- Add  content  Accordion-->
        <AddContentModel/>
        <!-- End  Add Content Accordion-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(
    faPlusCircle,
  );


    import Accordion from "../components/Accordions/Accordion";
    import AddContentModel from "../components/Modals/AddUnitModal";


    export default {
      data () {
        return {
          sections:this.$store.state.course.sections
      }
      } ,
        components: {
          Accordion,
          AddContentModel,
          'font-awesome-icon': FontAwesomeIcon
        },

        computed: {

        },
        methods: {
      },
      mounted(){
        // add a default section new section to the store
      }
    };
</script>

<style>
  .btn{
    background: transparent;
    border: 1px dashed darkcyan;
  }
  .fa-plus-circle{
    color:darkcyan;
  }
  .view {
    border-color: transparent;
    background-color: initial;
    color: initial
  }
</style>

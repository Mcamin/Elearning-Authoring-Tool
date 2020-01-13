<template>
  <b-button block  href="#" v-b-modal="func">
    <font-awesome-icon :icon="['fas', 'plus-circle']" size="2x" />
  </b-button>
</template>

<script>


  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


   export default {
        name: "AddBtn", props:{
          func:{
            type:String,
            required: true,
            description: "The function to trigger"
          }
          },
        components: {
          'font-awesome-icon': FontAwesomeIcon
        }

    }
</script>

<style scoped>
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

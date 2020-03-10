<template>
  <b-button block class="btn-wrapper"  href="#"  @click.prevent="triggerModal()"  >
    <font-awesome-icon :icon="['fas', 'plus-circle']"  size="2x" />
  </b-button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {bus} from "@/main";


  library.add(
    faPlusCircle
  );
   export default {
        name: "AddBtn",
     components: {
       'font-awesome-icon': FontAwesomeIcon,
     },
     props:{
       triggeredBy:{
         required: true,
         type:String,
         description: "the Id of the element that triggered the click"
       }

        },
     methods:{
       triggerModal(){

           switch(this.triggeredBy.charAt(0)){
             case "s":
               bus.$emit("add-module",this.triggeredBy);
               break;
             case "m":
               bus.$emit("add-li-modal",this.triggeredBy);
               break;
             default:
               this.$bvModal.show('add-sm-modal');
               break;
           }
         }
          }

    }
</script>

<style scoped>
  .btn-wrapper.btn{
    background: transparent;
    border: 1px dashed darkcyan;
    padding: 10px 0;

  }
  .btn-wrapper.btn:hover{
    background: rgb(80,213,183);
    border: 0px ;
    padding: 10px 0;

  }
  .btn-wrapper.btn:hover > .fa-plus-circle{
    color: white;
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

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

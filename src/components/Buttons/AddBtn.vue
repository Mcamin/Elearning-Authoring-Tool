<template>
  <b-button block  href="#"  @click.prevent="emitCallerID()" >
    <font-awesome-icon :icon="['fas', 'plus-circle']"  size="lg" />
  </b-button>
</template>

<script>

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {bus} from "@/main";
   export default {
        name: "AddBtn",
     props:{
       callerID:{
         type:String,
         required:true,
         description: "The caller ID: parent, sectionID, moduleID"
       }
        },
     methods:{
       emitCallerID(){
            if (this.callerID != null){
              bus.$emit('update-caller-id', this.callerID);

            }
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
    padding: 10px 0;

  }
  .btn:hover{
    background: rgb(80,213,183);
    border: 0px ;
    padding: 10px 0;

  }
  .btn:hover > .fa-plus-circle{
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

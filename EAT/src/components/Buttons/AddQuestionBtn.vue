<template>
  <b-button block class="btn-wrapper"  href="#"  @click.prevent="addQuestion()"  >
    <h2>Add a question ...</h2>
  </b-button>
</template>

<script>

  import {bus} from "@/main";
  import keygen from 'keygen';




   export default {
        name: "AddBtn",

     methods:{
       addQuestion(){
               bus.$emit("add-question");
                let id = keygen.url(keygen.medium),
                  id2 = keygen.hex(12);
               console.log(id);
             console.log(id2);
     }}

    }
</script>

<style scoped>
  .btn-wrapper.btn{
    background: transparent;
    border: 1px dashed darkcyan;
    padding: 10px 0;
    color:darkcyan;

  }
  .btn-wrapper.btn:hover{
    background: rgb(80,213,183);
    border: 0px ;
    padding: 10px 0;
    color: white;

  }

  .fa-plus-circle{
    color:darkcyan;
  }


</style>

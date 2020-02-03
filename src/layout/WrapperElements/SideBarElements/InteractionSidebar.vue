<template>
 <b-container  class="h-100 d-flex px-0 flex-column  "  style="">

   <b-row  class="mx-0 mt-2">
     <b-col class="px-0">
       <el-button class="w-100 pl-3 py-3 "
                  style="text-align: left">Interaction Title</el-button>
     </b-col>
   </b-row>

   <b-row  class="mx-0">
     <b-col class="px-0">
       <div class="pl-3 mt-3">
          Question Order
         <el-divider style="margin-bottom: 0px;"/>
       </div>
     </b-col>
   </b-row>
   <b-row  class="mx-0 h-100" style="overflow: auto">
     <b-col class="px-0">
      <Question/>
       <Question/>
       <Question/>
       <Question/>
       <Question/>
       <Question/>



     </b-col>
   </b-row>

<b-row  class="mt-auto mx-0">
   <b-col class="px-0">
     <el-button class=" py-3 w-100"style="text-align: center">Add Question</el-button>
   </b-col>
 </b-row>
 </b-container>
</template>

<script>


  import Question from "@/components/Interaction/Question"


  export default {
    name: "InteractionSidebar",
    data() {
      return {
      }
    },
      components:{
          Question,

      }
  }
</script>

<style lang="sass">
.el-button
  font-size: 18px!important
</style>

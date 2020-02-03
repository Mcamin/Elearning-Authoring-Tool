<template>
 <b-container  class="h-100 d-flex px-0 flex-column  "  style="background-color: yellow; overflow: hidden">

   <b-row  class="mx-0 mt-2">
     <b-col class="px-0">
       <el-button class="w-100 pl-3 py-3 "
                  style="">Interaction Title</el-button>
     </b-col>
   </b-row>

   <b-row  class="mx-0">
     <b-col class="px-0">
       <div class="pl-3 mt-3">
          Question Order
         <el-divider/>
       </div>
     </b-col>
   </b-row>
   <b-row  class="mx-0 h-100" style="background-color: darkred; overflow: auto">
     <b-col class="px-0">
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
       <div class="pl-3 mt-3">
         Question Order
         <el-divider/>
       </div>
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
  import {bus} from "@/main"
  export default {
    name: "InteractionSidebar",
    data() {
      return {
      }
    },
  }
</script>

<style lang="sass">
.el-button
  font-size: 18px!important
</style>

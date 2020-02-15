<template>
  <b-modal id="delete-modal" centered hide-footer  :title="'Delete '+item.title" modal-class="delete-modal">

    <template v-slot:default="{ close }">
      <b-container>
        <b-row class="  mt-3">
          <b-col>
            <h5>{{message}}</h5>
          </b-col>
        </b-row>
        <b-row class="  mb-3 mt-3">
          <b-col>
          <b-button variant="primary" class="px-3 mr-2 " @click="removeItem">Yes</b-button>
          <b-button variant="primary" class="px-3  ml-2" @click="close()">No</b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>

  </b-modal>
</template>

<script>
    export default {
        name: "DeleteModal",
      data(){
          return{
            message: 'Are you sure you want to remove the '+this.item.type+' '+this.item.title+ ' from the course?'
      }
      },
      props:{
          item:{
            type: Object,
            required: true,
            description:"The Item to delete"
          }
      },
      methods:{
          removeItem(){
            //Delete the item
            this.$bvModal.hide("delete-modal");

          }
      }
    }
</script>

<style scoped>

</style>

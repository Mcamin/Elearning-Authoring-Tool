<template>
  <b-modal id="delete-modal" centered hide-footer  :title="'Delete '+item.title" modal-class="delete-modal">

    <template v-slot:default="{ close }">
      <b-container>
        <b-row class="  mt-3">
          <b-col>
            <h5 v-html="message"/>
          </b-col>
        </b-row>
        <b-row class="  mb-3 mt-3">
          <b-col>
          <b-button variant="primary" class="px-3 mr-2 " @click="removeItem()">Yes</b-button>
          <b-button variant="primary" class="px-3  ml-2" @click="close()">No</b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>

  </b-modal>
</template>

<script>
    import {bus} from "@/main";
    import {mapActions} from "vuex";
    export default {
        name: "DeleteModal",
      data(){
          return{
            item:{
              type:'',
              id:'',
              title:'',
              img:''
            },
      }
      },
      computed:{
        message() {
          return   'Are you sure you want to remove the '+this.item.type+'<b> '+this.item.title+ '</b> from the course?';
        }
      },
      methods:{
        ...mapActions('course', {deleteCourse: 'deleteCourse'}),
          removeItem(){
            this.deleteCourse(this.item);
            this.$bvModal.hide("delete-modal");

          }
      },

      created() {
        bus.$on('delete-course', (item) => {
          this.item =item;
          this.$bvModal.show('delete-modal');
        });
      }
    }
</script>

<style scoped>

</style>

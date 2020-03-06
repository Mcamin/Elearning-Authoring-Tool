<template>
  <b-link   @click="handleClick()">
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col  class="text-left">
          <h4>{{this.title}}</h4>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col  class="text-right">
          <b-link href=""  @click.stop="handleDelete()" class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  color="gray" size="lg"/>
          </b-link>
          <b-link href="" class="ml-2" @click.stop="handleEdit()">
            <font-awesome-icon :icon="['fas', 'cog']" color="gray"  size="lg"/>
          </b-link>
        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>

  </b-card>
  </b-link>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {faTrash,faCog} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {mapActions} from 'vuex'
  import {bus} from "@/main";
  library.add(
    faTrash,
    faCog,
  );

    export default {
      name: "ContentCard",
      data() {
        return {}
      },
      props: {
        contentId: {
          Type: String,
          Description: "the element uuid"
        },
        title: {
          Type: String,
          Description: "The element title received from the parent component"
        },
        moduleId:{
          Type: String,
          Description: "the id of the module containing the element "
        }
      },
      components: {
        'font-awesome-icon': FontAwesomeIcon,
      },
      methods:{
        ...mapActions('module',{setSelectedModule:'setSelectedModule'}),
        handleClick() {
          this.setSelectedModule(this.moduleId).then( () =>
            {
              let contentType = this.contentId.charAt(0)==='i'? "interaction":"lesson";

              if(contentType === 'interaction')
                this.$router.push({name: 'edit-interaction', params: {id: this.contentId}});
              else
                this.$router.push({name: 'edit-lesson', params: {id: this.contentId}});
            }
          );

        },
        handleDelete(){
          let contentType = this.contentId.charAt(0)==='i'? "Interaction":"Lesson",
           metadata = {
            id: this.contentId,
            type: contentType,
            title: this.title,
          };
          bus.$emit('delete-modal', metadata);
        },
        handleEdit(){
          let contentType = this.contentId.charAt(0)==='i'? "Interaction":"Lesson",
           metadata = {
            id: this.contentId,
            type: contentType,
          };
          bus.$emit('edit-modal', metadata);
        }
      },

    }
</script>

<style scoped>

</style>

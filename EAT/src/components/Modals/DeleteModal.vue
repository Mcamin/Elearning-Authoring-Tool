<template>
  <b-modal id="delete-modal" centered hide-footer :title="'Delete '+item.title" modal-class="delete-modal">

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
    data() {
      return {
        item: {
          title:'',
          type:''
        },
      }
    },
    computed: {
      message() {
        console.log(this);
          switch (this.item.type) {
            case 'Course':
              return `Are you sure you want to remove the ${this.item.type} <b>${this.item.title}'</b> completely?`;
            case 'Module':
            case 'Interaction':
            case 'Lesson':
            case 'Section':
              return 'Are you sure you want to remove the '
                + this.item.type + '<b> ' + this.item.title
                + '</b> from the course? </br></br> <em>The item can still be accessed from the library</em>';
              default:
                return '';
      }
      }
    },
    methods: {
      ...mapActions('course', {deleteCourse: 'deleteCourse'}),
      ...mapActions('section', {deleteSectionReference: 'deleteSectionReference'}),
      ...mapActions('module', {deleteModuleReference: 'deleteModuleReference'}),
      ...mapActions('lesson', {deleteLessonReference: 'deleteLessonReference'}),
      ...mapActions('interaction', {deleteInteractionReference: 'deleteInteractionReference'}),
      removeItem() {
        switch (this.item.type) {
          case "Course":
            this.deleteCourse(this.item);
            break;
          case "Section":
            this.deleteSectionReference(this.item.id);
            break;
          case "Module":
            this.deleteModuleReference(this.item.id);
            break;
          case "Lesson":
            this.deleteLessonReference(this.item.id);
            break;
          case "Interaction":
            this.deleteInteractionReference(this.item.id);
            break;
        }

        this.$bvModal.hide("delete-modal");

      }
    },

    created() {
      bus.$on('delete-modal', (el) => {
        this.item = el;
        this.$bvModal.show('delete-modal');
      });
    }
  }
</script>

<style scoped>

</style>

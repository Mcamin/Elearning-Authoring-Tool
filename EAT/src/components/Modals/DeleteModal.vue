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
  import {mapActions, mapState} from "vuex";

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
     ...mapState('course', ['currentCourse']),
      ...mapState('section', ['sections']),
      ...mapState('lesson', ['lessons']),
      ...mapState('interaction', ['interactions']),
      ...mapState('module', ['modules']),
      message() {
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
      ...mapActions('course', {deleteCourse: 'deleteCourse',updateCourse:'updateCourse'}),
      ...mapActions('section', {deleteSectionReference: 'deleteSectionReference',updateSection:'updateSection'}),
      ...mapActions('module', {deleteModuleReference: 'deleteModuleReference',updateModule:'updateModule'}),
      ...mapActions('lesson', {deleteLessonReference: 'deleteLessonReference'}),
      ...mapActions('interaction', {deleteInteractionReference: 'deleteInteractionReference'}),
      removeItem() {

        let index = null,
          target = null;
        switch (this.item.type) {
          case "Course":
            this.deleteCourse(this.item);
            break;
          case "Section":
                index = this.currentCourse.contentIndex;
                if(index.hasOwnProperty(this.item.id))
                {delete index[this.item.id];
             this.updateCourse({
              targetCourse: this.currentCourse.uuid,
              props:
                {contentIndex: index
                }
            });
             this.deleteSectionReference(this.item.id);
                }
            break;
          case "Module":
            target = this.sections.find(el => {
              if(el.modulesIndex.hasOwnProperty(this.item.id))
                return el;
            });
            if(target== null)
            {index = this.currentCourse.contentIndex;
              if(index.hasOwnProperty(this.item.id))
              delete index[this.item.id];
              this.updateCourse({
                targetCourse: this.currentCourse.uuid,
                props:
                  {contentIndex: index
                  }
              });

            }
            else
            {index = target.modulesIndex;
              if(index.hasOwnProperty(this.item.id))
                delete index[this.item.id];
              this.updateSection({
                targetSection: target.uuid,
                props:
                  {modulesIndex: index
                  }
              });
            }
            this.deleteModuleReference(this.item.id);
            break;
          case "Lesson":
            target = this.modules.find(el => {
              if(el.contentIndex.hasOwnProperty(this.item.id))
              return el
             });

            if(target != null)
            { index = target.contentIndex;
            if( index.hasOwnProperty(this.item.id))
            {delete index[this.item.id];
              this.updateModule({
                targetModule: target.uuid,
                props:
                  {contentIndex: index
                  }
              });
              this.deleteLessonReference(this.item.id);
            }
            }
            break;
          case "Interaction":
            target = this.modules.find(el => {
              if(el.contentIndex.hasOwnProperty(this.item.id))
              return el;
            });
            if(target != null)
            { index = target.contentIndex;
              if( index.hasOwnProperty(this.item.id))
              {delete index[this.item.id];
                this.updateModule({
                  targetModule: target.uuid,
                  props:
                    {contentIndex: index
                    }
                });
                this.deleteInteractionReference(this.item.id);
              }
            }
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

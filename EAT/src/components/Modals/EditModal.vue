<template>
  <b-modal id="edit-modal"
           @hidden="resetParams"
           centered
           hide-footer>
    <template v-slot:modal-title>
      {{headerTitle}}
    </template>
    <template v-slot:default="{ close }">
      <!-- Edit Form-->
      <b-container fluid>
        <b-row class="mb-3 mt-3">
          <!-- Title of section / module-->
          <b-form class="w-100" @submit.prevent="handleSubmit">
            <!-- Title of section / module-->
            <b-form-group id="input-group-title" label="Title:" label-for="input-title">
              <b-form-input
                id="input-title"
                v-model="title"
                required
                :placeholder="titlePlaceholder"
              />
            </b-form-group>
            <!-- End of Title of section / module-->
            <!-- Description of section / module-->
            <b-form-group id="input-group-desc" label="Description" label-for="input-description">
              <b-form-textarea
                id="input-description"
                v-model="description"
                required
                rows="2"
                max-rows="6"
                :placeholder="descriptionPlaceholder"
              />
            </b-form-group>
            <!-- End Description of section / module-->
          </b-form>
          <b-container fluid class="px-0 mt-3">
            <b-row class="h-100 ml-2">
              <b-button variant="primary" class="float-right" @click="handleSubmit()">Edit</b-button>
              <b-button variant="primary" class=" float-right mx-2" @click="close()">Cancel</b-button>
            </b-row>
          </b-container>
        </b-row>
      </b-container>
      <!-- End Form-->
    </template>
  </b-modal>
</template>
<script>


  import {mapActions, mapGetters} from "vuex";
  import {bus} from "@/main";


  export default {
    name: "EditModal",
    data() {
      return {
        currentElement:{},
        strings: {
          editSection: {
            headerTitle: 'Edit Section',
            titlePlaceholder: 'Enter a Section title...',
            descriptionPlaceholder: 'Enter a Section description...'
          },
          editModule: {
            headerTitle: 'Edit Module',
            titlePlaceholder: 'Enter a module title...',
            descriptionPlaceholder: 'Enter a module description...'
          },
          editLesson: {
            headerTitle: 'Edit lesson',
            titlePlaceholder: 'Enter a lesson title...',
            descriptionPlaceholder: 'Enter a lesson description...'

          },
          editInteraction: {
            headerTitle: 'Edit  Interaction',
            titlePlaceholder: 'Enter an interaction title...',
            descriptionPlaceholder: 'Enter an interaction description...'
          },
        },
        descriptionPlaceholder: '',
        titlePlaceholder: '',
        headerTitle: '',
        elementType: '',
        elementId: '',
        title: '',
        description: ''
      }
    },
    computed:{
      ...mapGetters(
        'section', ['getSectionByID']
      ),
      ...mapGetters(
        'module', ['getModuleByID']
      ),
      ...mapGetters(
        'interaction', ['getInteractionByID']
      ),
      ...mapGetters(
        'lesson', ['getLessonByID']
      )
    },

    methods: {
      ...mapActions('interaction', {updateInteraction: 'updateInteraction'}),
      ...mapActions('lesson', {updateLesson: 'updateLesson'}),
      ...mapActions('section', {updateSection: 'updateSection'}),
      ...mapActions('module', {updateModule: 'updateModule'}),


      resetParams() {
        this.headerTitle = '';
        this.titlePlaceholder = '';
        this.descriptionPlaceholder = '';
        this.elementType = '';
        this.elementId = '';
        this.title = '';
        this.description = '';
        this.currentElement={};
      },

      async handleSubmit() {


        let payload = {
          title: this.title,
          description: this.description
        };

        switch (this.elementType) {
          case 'Section':
            this.updateSection({
              targetSection: this.elementId,
              props: payload
            });
            this.$bvModal.hide('edit-modal');
            this.resetParams();
            break;
          case 'Module':
            this.updateModule({
              targetModule: this.elementId,
              props: payload
            });
            this.$bvModal.hide('edit-modal');
            this.resetParams();
            break;
          case 'Interaction':
            this.updateInteraction({
              targetInteraction: this.elementId,
              props: payload
            });
            this.$bvModal.hide('edit-modal');
            this.resetParams();
            break;
          case 'Lesson':
            this.updateLesson({
              targetLesson: this.elementId,
              props: payload
            });
            this.$bvModal.hide('edit-modal');
            this.resetParams();
            break;
        }

      },},

      created() {
        bus.$on('edit-modal', (meta) => {

          switch (meta.type) {
            case "Lesson":
                this.title = this.getLessonByID(meta.id).title;
                this.description = this.getLessonByID(meta.id).description;
                this.headerTitle = this.strings.editLesson.headerTitle;
                this.titlePlaceholder = this.strings.editLesson.titlePlaceholder;
                this.descriptionPlaceholder = this.strings.editLesson.descriptionPlaceholder;

              break;
            case "Interaction":
              this.title = this.getInteractionByID(meta.id).title;
              this.description = this.getInteractionByID(meta.id).description;
                this.headerTitle = this.strings.editInteraction.headerTitle;
                this.titlePlaceholder = this.strings.editInteraction.titlePlaceholder;
                this.descriptionPlaceholder = this.strings.editInteraction.descriptionPlaceholder;
              break;

            case "Section":
              this.title = this.getSectionByID(meta.id).title;
              this.description = this.getSectionByID(meta.id).description;
              this.headerTitle = this.strings.editSection.headerTitle;
              this.titlePlaceholder = this.strings.editSection.titlePlaceholder;
              this.descriptionPlaceholder = this.strings.editSection.descriptionPlaceholder;
              break;
            case "Module":
              this.title = this.getModuleByID(meta.id).title;
              this.description = this.getModuleByID(meta.id).description;
              this.headerTitle = this.strings.editModule.headerTitle;
              this.titlePlaceholder = this.strings.editModule.titlePlaceholder;
              this.descriptionPlaceholder = this.strings.editModule.descriptionPlaceholder;
              break;
          }
          this.elementId = meta.id;
          this.elementType = meta.type;
          this.$bvModal.show('edit-modal');
        });
      }
  }
</script>

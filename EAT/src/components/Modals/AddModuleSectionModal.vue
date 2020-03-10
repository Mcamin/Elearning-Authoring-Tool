<template>
  <b-modal id="add-sm-modal"
           @hidden="resetParams"
           centered
           :title="strings.headerTitle" hide-footer>
    <template v-slot:default="{ close }">
      <b-container v-if="stepper===1" fluid>
        <!--  Add Section -->
        <b-row v-if="sectionId===''" class="  mb-3 mt-3">
          <b-col>
            <a @click.prevent="addSectionClicked()">
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="2" class="d-flex justify-content-center align-items-center">
                      <font-awesome-icon :icon="['fas', 'list-alt']" size="2x"/>
                    </b-col>
                    <b-col>
                      <b-card-title>{{strings.addSection.title}}</b-card-title>
                      <b-card-text>
                        {{strings.addSection.description}}
                      </b-card-text>
                    </b-col>
                  </b-row>

                </b-card-body>
              </b-card>
            </a>
          </b-col>
        </b-row>
        <!-- End Add Section -->

        <!-- Add Module -->
        <b-row class="mb-3 mt-3">
          <b-col>
            <a @click.prevent="addModuleClicked()">
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="2" class="d-flex justify-content-center align-items-center">
                    <font-awesome-icon :icon="['fas', 'list-ul']" size="2x"/>
          </b-col>
                    <b-col>
                      <b-card-title>{{strings.addModule.title}}</b-card-title>
                      <b-card-text>
                        {{strings.addModule.description}}
                      </b-card-text>
                    </b-col>
                  </b-row>

                </b-card-body>
              </b-card>
            </a>
          </b-col>
        </b-row>
        <!-- End Add Module -->


        <!-- Import Section/Module -->
        <b-row v-if="sectionId===''" class="mb-3 mt-3">
          <b-col>
            <a @click.prevent="importSectionModuleClicked()">
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="2" class="d-flex justify-content-center align-items-center">
                      <font-awesome-icon :icon="['fas', 'file-upload']" size="2x"/>
                    </b-col>
                    <b-col v-if="sectionId===''">
                      <b-card-title>{{strings.importSectionModule.title}}</b-card-title>
                      <b-card-text>
                        {{strings.importSectionModule.description}}
                      </b-card-text>
                    </b-col>
                    <b-col v-else>
                      <b-card-title>{{strings.importModule.title}}</b-card-title>
                      <b-card-text>
                        {{strings.importModule.description}}
                      </b-card-text>
                    </b-col>
                  </b-row>

                </b-card-body>


              </b-card>
            </a>
          </b-col>
        </b-row>
        <!-- End Import Section/Module -->

        <!-- Import Module -->
        <b-row v-else class="mb-3 mt-3">
          <b-col>
            <a @click.prevent="importModuleClicked()">
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="2" class="d-flex justify-content-center align-items-center">
                      <font-awesome-icon :icon="['fas', 'file-upload']" size="2x"/>
                    </b-col>
                    <b-col>
                      <b-card-title>{{strings.importModule.title}}</b-card-title>
                      <b-card-text>
                        {{strings.importModule.description}}
                      </b-card-text>
                    </b-col>
                  </b-row>

                </b-card-body>
              </b-card>
            </a>
          </b-col>
        </b-row>
        <!-- End Import Module -->

      </b-container>
      <!-- Add Form-->
      <b-container v-if="stepper===2" fluid>
        <b-row class="  mb-3 mt-3">
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
            <b-row class="h-100 addsec">
              <b-button variant="primary" class="float-right" @click="handleSubmit()">Add</b-button>
              <b-button variant="primary"  class=" float-right mx-2" @click="close()">Cancel</b-button>
            </b-row>
          </b-container>
        </b-row>
      </b-container>
      <!-- End Form-->
    </template>
  </b-modal>
</template>
<script>

  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faListUl, faListAlt, faFileUpload} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {mapActions, mapState} from "vuex";
  import {uuid} from "vue-uuid";
  import {bus} from "@/main";
  library.add(
    faListUl,
    faFileUpload,
    faListAlt,
  );

  export default {
    name: "AddModuleSectionModel",
    components: {
      'font-awesome-icon': FontAwesomeIcon
    },
    computed: {
      ...mapState('course', ['currentCourse']),
      ...mapState('section', ['sections'])
    },
    data() {
      return {
        stepper: 1,
        strings: {
          headerTitle: 'Add a new Section/Module',
          addSection: {
            title: 'Add Section',
            description: 'Add a section to the course to organize its structure'
          },
          addModule: {
            title: 'Add Module',
            description: 'Add a Module to the course.'
          },
          importSectionModule: {
            title: 'Import Section/Module',
            description: 'Import a section/module from the library'
          },
          importModule: {
            title: 'Import Module',
            description: 'Import a module from the library'
          },
        },
        descriptionPlaceholder: '',
        titlePlaceholder: '',
        description: '',
        title: '',
        elementType: '',
        sectionId:''
      }
    },

    methods: {

      ...mapActions('course', {updateCourse:'updateCourse'}),
      ...mapActions('section', {createSection: 'createSection',updateSection:'updateSection'}),
      ...mapActions('module', {createModule: 'createModule'}),
      addSectionClicked() {
        this.strings.headerTitle = 'Add a Section';
        this.stepper++;
        this.elementType = 'section';
        this.titlePlaceholder = 'Enter a Section title...';
        this.descriptionPlaceholder = 'Enter a Section description...'
      },

      addModuleClicked() {
        this.strings.headerTitle = 'Add a Module';
        this.stepper++;
        this.elementType = 'module';
        this.titlePlaceholder = 'Enter a Module title...';
        this.descriptionPlaceholder = 'Enter a Module description...'
      },

      importSectionModuleClicked() {
        this.$router.push({name: 'import', params: {id: this.moduleId,importType:"section-module"}});
        // Open Section/Module Search Page
      },
      importModuleClicked() {
        this.$router.push({name: 'import', params: {id: this.moduleId,importType:"section-module"}});
        // Open Section/Module Search Page
      },

      resetParams() {
        this.strings.headerTitle = 'Add a new Section/Module';
        this.stepper = 1;
        this.title = '';
        this.description = '';
        this.titlePlaceholder = '';
        this.descriptionPlaceholder = '';
        this.elementType = '';
        this.sectionId = '';
      },

      async handleSubmit() {

        let payload = {
          type:this.elementType,
          title: this.title,
          description: this.description
        },
          id = '',
        indexObject = this.sectionId===''?{ ...this.currentCourse.contentIndex} :
          {...this.sections.find(el => el.uuid === this.sectionId).modulesIndex} ,
        contentLength = Object.keys(indexObject).length;


        try {

          switch (this.elementType) {
            case 'section':
               id = 's-'+uuid.v1();
               payload.type= "Section";
              payload.uuid = id;
              payload.modulesIndex = {};
              await this.createSection(payload);

              indexObject[id] =contentLength;
              await this.updateCourse(
                {
                  targetCourse: this.currentCourse.uuid,
                  props: {
                    contentIndex: indexObject
                  }
                }
                          );
              break;
            case 'module':
               id = 'm-'+uuid.v1();
              payload.uuid = id;
              payload.type= "Module";
              payload.contentIndex = {};
               await this.createModule(payload);
              indexObject[id] = contentLength;
              // is course: update index
              if(this.sectionId===''){
              await this.updateCourse({
                targetCourse:this.currentCourse.uuid,
                props:{
                  contentIndex:indexObject
                }
              });
              }
              //  is Section : update sectionIndex
                else{
               await this.updateSection({
                  targetSection:this.sectionId,
                  props:{
                    modulesIndex:indexObject
                  }
                });
              }

              break;
          }
        } catch (er) {
          console.log(er);
        } finally {
          this.$bvModal.hide('add-sm-modal');
          this.resetParams();
        }
      }

    },
    created(){
      bus.$on('add-module', (sectionId) => {
        this.strings.headerTitle = "Add / Import Module";
        this.sectionId = sectionId;
        this.$bvModal.show('add-sm-modal');
      });
    }
  }
</script>



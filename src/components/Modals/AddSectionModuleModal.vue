<template>
    <b-modal id="add-section-module" centered :title="strings.headerTitle" hide-footer size="lg">
      <b-container>
        <el-steps :active="params.stepper" finish-status="success" align-center>
          <el-step/>
          <el-step/>
          <el-step/>
          <el-step/>
        </el-steps>

        <b-row v-if="params.stepper===0" class=" text-center mb-3 mt-5">

          <!-- Add Section -->
          <b-col>
            <a @click.prevent="addSectionClicked()">
              <b-card no-body style="max-width: 20rem;" >

                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'list-alt']" size="lg"/>
                </template>

                <b-card-body>
                  <b-card-title>{{strings.addSection.title}}</b-card-title>
                  <b-card-text>
                    {{strings.addSection.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Add Section -->

          <!-- Add Module -->
          <b-col>
            <a @click.prevent="addModuleClicked()">
            <b-card no-body style="max-width: 20rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{strings.addModule.title}}</b-card-title>
                <b-card-text>
                  {{strings.addModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Add Module -->

          <!-- Import Section/Module -->
          <b-col>
            <a @click.prevent="importSectionModuleClicked()">
            <b-card no-body style="max-width: 20rem;">
              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{strings.importSectionModule.title}}</b-card-title>
                <b-card-text>
                  {{strings.importSectionModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Import Section/Module -->
        </b-row>

        <!-- Add Section clicked -->
        <b-row v-if="params.stepper===1 && params.showAddModule" class=" text-center d-flex justify-content-center mb-3 mt-5">
          <!-- Add Module -->
          <b-col cols="4">
            <a @click.prevent="addModuleClicked()">
            <b-card no-body style="max-width: 14rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{strings.addModule.title}}</b-card-title>
                <b-card-text>
                  {{strings.addModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Add Module -->

          <!-- Import Module -->
          <b-col  cols="4">
            <a @click.prevent="importModuleClicked()">
            <b-card no-body style="max-width: 14rem;">
              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{strings.importModule.title}}</b-card-title>
                <b-card-text>
                  {{strings.importModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Import Module -->
        </b-row>
        <!-- End Add Section clicked -->

        <!-- Add Module clicked -->
        <b-row v-if="params.showAddContent && (params.stepper===1 || params.stepper===2)" class=" text-center mb-3 mt-5">
          <!-- Add Interaction -->
          <b-col>
            <a @click.prevent="addInteractionClicked()">
            <b-card no-body style="max-width: 20rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-alt']" size="lg"/>
              </template>

              <b-card-body>
                <b-card-title>{{strings.addInteraction.title}}</b-card-title>
                <b-card-text>
                  {{strings.addInteraction.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Add Interactions -->

          <!-- Add  Lesson -->
          <b-col>
            <a @click.prevent="addLessonClicked()">
            <b-card no-body style="max-width: 20rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{strings.addLesson.title}}</b-card-title>
                <b-card-text>
                  {{strings.addLesson.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Add Lesson -->

          <!-- Add Glossary -->
          <b-col>
            <a @click.prevent="addGlossaryClicked()">
            <b-card no-body style="max-width: 20rem;">
              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{strings.addGlossary.title}}</b-card-title>
                <b-card-text>
                  {{strings.addGlossary.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Add Glossary -->
        </b-row>
        <!-- End Add Module clicked -->

        <!-- Add Interaction clicked -->
        <b-row v-if="params.showInteractions && (params.stepper===2 || params.stepper===3)" class=" text-center d-flex justify-content-center mb-3 mt-5">
          <!-- Create Interaction -->
          <b-col cols="4">
            <a @click.prevent="createInteractionClicked()">
              <b-card no-body style="max-width: 14rem;">

                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
                </template>

                <b-card-body>
                  <b-card-title>{{strings.createInteraction.title}}</b-card-title>
                  <b-card-text>
                    {{strings.createInteraction.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Create Interaction -->

          <!-- Import Interaction -->
          <b-col  cols="4">
            <a @click.prevent="importInteractionClicked()">
              <b-card no-body style="max-width: 14rem;">
                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
                </template>

                <b-card-body>
                  <b-card-title>{{strings.importInteraction.title}}</b-card-title>
                  <b-card-text>
                    {{strings.importInteraction.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Import Interaction -->
        </b-row>
        <!-- End Add Interaction clicked -->

        <!-- Add Lesson clicked -->
        <b-row v-if="params.showLesson && (params.stepper===2 || params.stepper===3)" class=" text-center d-flex justify-content-center mb-3 mt-5">
          <!-- Create a lesson -->
          <b-col cols="4">
            <a @click.prevent="createLessonClicked()">
              <b-card no-body style="max-width: 14rem;">

                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
                </template>

                <b-card-body>
                  <b-card-title>{{strings.createLesson.title}}</b-card-title>
                  <b-card-text>
                    {{strings.createLesson.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Create a  lesson -->

          <!-- Import lesson -->
          <b-col  cols="4">
            <a @click.prevent="importLessonClicked()">
              <b-card no-body style="max-width: 14rem;">
                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
                </template>

                <b-card-body>
                  <b-card-title>{{strings.importLesson.title}}</b-card-title>
                  <b-card-text>
                    {{strings.importLesson.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Import lesson -->
        </b-row>
        <!-- End Add Lesson clicked -->

        <!-- Add Glossary clicked -->
        <b-row v-if="params.showGlossary && (params.stepper===2 || params.stepper===3)" class=" text-center d-flex justify-content-center mb-3 mt-5">
          <!-- Add Module -->
          <b-col cols="4">
            <a @click.prevent="createGlossaryClicked()">
              <b-card no-body style="max-width: 14rem;">

                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
                </template>

                <b-card-body>
                  <b-card-title>{{strings.createGlossary.title}}</b-card-title>
                  <b-card-text>
                    {{strings.createGlossary.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Add Module -->

          <!-- Import Module -->
          <b-col  cols="4">
            <a @click.prevent="importGlossaryClicked()">
              <b-card no-body style="max-width: 14rem;">
                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
                </template>

                <b-card-body>
                  <b-card-title>{{strings.importGlossary.title}}</b-card-title>
                  <b-card-text>
                    {{strings.importGlossary.description}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
          <!-- End Import Module -->
        </b-row>
        <!-- End Add Glossary clicked -->

      </b-container>
    </b-modal>
</template>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faListUl, faListAlt,faFileUpload} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


  library.add(
    faListUl,
    faListAlt,
    faFileUpload
  );

  import {mapActions} from "vuex";


    export default {
        name: "AddContentModel",
      components:{
      'font-awesome-icon': FontAwesomeIcon},
      data() {
        return {
          params:{
            stepper: 0,
            showAddModule: false,
            showAddContent: false,
            showInteractions: false,
            showLesson: false,
            showGlossary: false
          },
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
            addInteraction: {
              title: 'Add Interaction',
              description: 'Add a Quiz to the module'
            },
            addLesson: {
              title: 'Add Lesson',
              description: 'Add a Lesson to the module'
            },
            addGlossary: {
              title: 'Add Glossary',
              description: 'Add a Glossary to the module'
            },
            createLesson:{
              title: 'Create Lesson',
              description: 'Create a new lesson'
            },
            createInteraction:{
              title: 'Create Interaction',
              description: 'Create a new interaction'
            },
            createGlossary:{
              title: 'Create Glossary',
              description: 'Add a new Glossary'
            },
            importLesson:{
              title: 'Import Lesson',
              description: 'Import a lesson from library'
            },
            importInteraction:{
              title: 'Import Interaction',
              description: 'Import an interaction from library'
            },
            importGlossary:{
              title: 'Import Glossary',
              description: 'Import an interaction from library'
            },
          },
        }
      },
      methods:{
        addSectionClicked(){
          this.params.stepper++;
          this.params.showAddModule = true;
          },
        addModuleClicked(){
          //check the stepper value
          this.params.stepper++;
          this.params.showAddContent = true;
        },
        importSectionModuleClicked(){
          // Open Section/Module Search Page
        },
        importModuleClicked(){
          // Open Module Search Page
        },
        addLessonClicked(){
          this.params.stepper++;
          this.params.showLesson = true
        },
        addInteractionClicked(){
          this.params.stepper++;
          this.params.showInteractions = true
        },
        addGlossaryClicked(){
          this.params.stepper++;
          this.params.showGlossary = true
        },
        resetParams(){
          this.params.stepper= 0;
          this.params.showAddModule=false;
          this.params.showAddContent=false;
          this.params.showInteractions= false;
          this.params.showLesson=false;
          this.params.showGlossary=false;
          }

      },
      mounted() {
        this.$root.$on('bv::modal::hidden', (bvEvent, modalId) => {
          this.resetParams();

        })
      }
    }
</script>
<style lang="css">
</style>

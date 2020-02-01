<template>
    <b-modal id="add-section-module" centered :title="headerTitle" hide-footer size="lg">
      <b-container>
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="Add a Section or a Module">
          </el-step>
          <el-step title="Step 2"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>

        <b-row v-if="active===1" class=" text-center mb-3 mt-3">

          <!-- Add Section -->
          <b-col>
            <a @click.prevent="addSectionClicked()">
              <b-card no-body style="max-width: 20rem;" >

                <template v-slot:header>
                  <font-awesome-icon :icon="['fas', 'list-alt']" size="lg"/>
                </template>

                <b-card-body>
                  <b-card-title>{{addSection.title}}</b-card-title>
                  <b-card-text>
                    {{addSection.description}}
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
                <b-card-title>{{addModule.title}}</b-card-title>
                <b-card-text>
                  {{addModule.description}}
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
                <b-card-title>{{importSectionModule.title}}</b-card-title>
                <b-card-text>
                  {{importSectionModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Import Section/Module -->
        </b-row>

        <!-- Add Section clicked -->
        <b-row v-if="active===1" class=" text-center d-flex justify-content-center mb-3 mt-3">
          <!-- Add Module -->
          <b-col cols="4">
            <a @click.prevent="addModuleClicked()">
            <b-card no-body style="max-width: 14rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{addModule.title}}</b-card-title>
                <b-card-text>
                  {{addModule.description}}
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
                <b-card-title>{{importModule.title}}</b-card-title>
                <b-card-text>
                  {{importModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Import Module -->
        </b-row>
        <!-- End Add Section clicked -->

        <!-- Add Module clicked -->
        <b-row v-if="active===0" class=" text-center mb-3 mt-3">
          <!-- Add Interaction -->
          <b-col>
            <a @click.prevent="addInteractionClicked()">
            <b-card no-body style="max-width: 20rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-alt']" size="lg"/>
              </template>

              <b-card-body>
                <b-card-title>{{addInteraction.title}}</b-card-title>
                <b-card-text>
                  {{addInteraction.description}}
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
                <b-card-title>{{addLesson.title}}</b-card-title>
                <b-card-text>
                  {{addLesson.description}}
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
                <b-card-title>{{addGlossary.title}}</b-card-title>
                <b-card-text>
                  {{addGlossary.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
            </a>
          </b-col>
          <!-- End Add Glossary -->
        </b-row>
        <!-- End Add Module clicked -->

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
          active: 0,
          headerTitle:'Add a new Section/Module',
          addSection:{
            title:'Add Section',
            description: 'Add a section to the course to organize its structure'
          },
          addModule:{
            title:'Add Module',
            description: 'Add a Module to the course.'
          },
          importSectionModule:{
            title:'Import Section/Module',
            description: 'Import a section/module from the library'
          },
          importModule:{
            title:'Import Module',
            description: 'Import a module from the library'
          },
          addInteraction:{
            title:'Add Interaction',
            description: 'Add a Quiz to the module'
          },
          addLesson:{
            title:'Add Lesson',
            description: 'Add a Lesson to the module'
          },
          addGlossary:{
            title:'Add Glossary',
            description: 'Add a Glossary to the module'
          },

          id : null,
          formData: {
            title: '',
            },
          show:true
        }
      },
      methods:{
        addSectionClicked(){alert('hello');},
        addModuleClicked(){alert('hello');},
        importSectionModuleClicked(){alert('hello');},
        importModuleClicked(){alert('hello');},
        addLessonClicked(){alert('hello');},
        addInteractionClicked(){alert('hello');},
        addGlossaryClicked(){alert('hello');}
      }
    }
</script>
<style lang="css">
</style>

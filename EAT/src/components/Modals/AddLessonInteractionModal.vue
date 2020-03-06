<template>
  <b-modal id="add-li-modal"
            centered
           :title="strings.headerTitle"
           hide-footer>
    <template v-slot:default="{ close }">
      <b-container fluid>

          <!-- Add  Lesson -->
          <b-row  class="  mb-3 mt-3">
            <b-col>
              <a @click.prevent="addLessonClicked()">
                <b-card no-body>
                  <b-card-body>
                    <b-row>
                      <b-col cols="2" class="d-flex justify-content-center align-items-center">
                        <font-awesome-icon :icon="['fas', 'book-open']" size="2x"/>
                      </b-col>
                    <b-col>
                      <b-card-title>{{strings.createLesson.title}}</b-card-title>
                      <b-card-text>
                        {{strings.createLesson.description}}
                      </b-card-text>
                    </b-col>
                    </b-row>
                  </b-card-body>
                </b-card>
              </a>
            </b-col>
          </b-row>
            <!-- End Add Lesson -->

        <!-- Add Interaction  -->
        <b-row  class="  mb-3 mt-3">
          <b-col >
            <a @click.prevent="addInteractionClicked()">
              <b-card no-body>
                <b-card-body>
                  <b-row>
                    <b-col cols="2" class="d-flex justify-content-center align-items-center">
                      <font-awesome-icon :icon="['fas', 'tasks']" size="2x" />
                    </b-col>
                    <b-col>

                      <b-card-title>{{strings.createInteraction.title}}</b-card-title>
                      <b-card-text>
                        {{strings.createInteraction.description}}
                      </b-card-text>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </a>
          </b-col>
        </b-row>
        <!-- End Create Interaction -->

            <!-- Import   Lesson -->
        <b-row  class=" mb-3 mt-3">
            <b-col>
              <a @click.prevent="importLessonClicked()">
                <b-card no-body >
                  <b-card-body>
                 <b-row>
                   <b-col cols="2" class="d-flex justify-content-center align-items-center">
                     <font-awesome-icon :icon="['fas', 'upload']" size="2x" />
                     </b-col>
                   <b-col>

                       <b-card-title>{{strings.importLesson.title}}</b-card-title>
                       <b-card-text>
                         {{strings.importLesson.description}}
                       </b-card-text>
                   </b-col>
                 </b-row>
                  </b-card-body>
                </b-card>
              </a>
            </b-col>
        </b-row>
            <!-- End Import Lesson -->


            <!-- Import Interaction -->
        <b-row class="mb-3 mt-3">
            <b-col>
              <a @click.prevent="importInteractionClicked()">
                <b-card no-body>
                  <b-card-body>
                  <b-row>
                    <b-col cols="2" class="d-flex justify-content-center align-items-center">
                      <font-awesome-icon :icon="['fas', 'upload']" size="2x" />
                    </b-col>
                    <b-col>

                        <b-card-title>{{strings.importInteraction.title}}</b-card-title>
                        <b-card-text>
                          {{strings.importInteraction.description}}
                        </b-card-text>
                    </b-col>
                  </b-row>
                  </b-card-body>
                </b-card>
              </a>
            </b-col>
          </b-row>
          <!-- End import Interaction  -->


      </b-container>
    </template>
  </b-modal>
</template>
<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faTasks, faUpload, faBookOpen} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {bus} from "@/main";
  import {mapActions} from "vuex"

  library.add(
    faTasks,
    faUpload,
    faBookOpen
  );

  export default {
    name: "AddLessonInteractionModel",
    components: {
      'font-awesome-icon': FontAwesomeIcon
    },
    data() {
      return {
        strings: {
          headerTitle: 'Add a new Lesson/Interaction',
          createLesson:{
            title: 'Create Lesson',
            description: 'Create a new lesson',
            descriptionAlt:"Create a lesson from a wide range of e blocks. " +
              "You can access existing lessons from your repository",
          },
          createInteraction:{
            title: 'Create Interaction',
            description: 'Create a new interaction',
            descriptionAlt:"Test the learner's knowledge with a quiz. You can " +
              "access quizzes questions from your repository",
          },
          importLesson:{
            title: 'Import Lesson',
            description: 'Import a lesson from library'
          },
          importInteraction:{
            title: 'Import Interaction',
            description: 'Import an interaction from library'
          },
        },
        elementType: '',
        moduleId:''
      }
    },

    methods: {
      ...mapActions('module',{setSelectedModule:'setSelectedModule'}),
      resetParams() {
        this.elementType = '';
        this.moduleId = '';
      },
      importInteractionClicked() {
        this.$router.push({name: 'import', params: {id: this.moduleId,importType:"interaction"}});
      },
      addInteractionClicked() {
        this.setSelectedModule(this.moduleId).then( () =>
          {
            let newInteractionID = 'i-' + this.$uuid.v1();
            this.$router.push({name: 'edit-interaction', params: {id: newInteractionID}});
          }
        );
      },
      importLessonClicked () {
        this.$router.push({name: 'import', params: {id: this.moduleId,importType:"lesson"}});
      },
      addLessonClicked() {
        this.setSelectedModule(this.moduleId).then( () =>
          {
            let newLessonID = 'l-' + this.$uuid.v1();
            this.$router.push({name: 'edit-lesson', params: {id: newLessonID}});
          }
        );
      }

    },
    mounted() {
      this.$root.$on('bv::modal::hidden', (bvEvent, modalId) => {
        this.resetParams();
      })
    },
    created(){
      bus.$on('add-li-modal', (moduleId) => {
        this.moduleId = moduleId;
        this.$bvModal.show('add-li-modal');
      });
    }
  }
</script>

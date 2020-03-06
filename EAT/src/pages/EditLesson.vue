<template>
  <b-container  class="h-100">
    <b-row class="mt-5 mx-5">
      <b-col class="mb-4 mx-auto">
        <!--HTML Card-->
        <b-card class="mb-5" no-body v-if="currentLesson">
          <b-card-body>
            <b-card-text>
              <b-container fluid>
                <b-row>
                  <b-col class="mb-3">
                    <input :class="{view: !meta.isEditing}" :disabled="!meta.isEditing" :value="selectedLesson.title" ref="lessonTitle"
                           type="text" v-on:keyup.enter="toggleTitleInput">
                    <a class="ml-2" href="#">
                      <font-awesome-icon :icon="['fas', 'pen']" @click="meta.isEditing = !meta.isEditing" size="lg"
                                         v-if="!meta.isEditing" color="gray"/>
                      <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="lg"
                                         v-else-if="meta.isEditing" color="gray"/>
                    </a>
                    <!--<a class="ml-2" href="#">
                      <font-awesome-icon :icon="['fas', 'trash']" size="lg"/>
                    </a>
                    <a class="ml-2" href="#">
                      <font-awesome-icon :icon="['fas', 'cog']" size="lg"/>

                    </a>-->
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="mb-5">
                    <div>
                      <vue-tags-input
                        :allow-edit-tags="true"
                        :tags="selectedLesson.tags"
                        @tags-changed="updateTags"
                        v-model="meta.tag"
                      />
                    </div>
                  </b-col>
                </b-row>
              </b-container>
              <vue-editor  v-model="selectedLesson.content"></vue-editor>
            </b-card-text>
          </b-card-body>
        </b-card>
        <!--Metadata Card-->
       <!-- <b-card class="mb-5" no-body>
          <b-card-body>
            <b-card-text>
              <b-container fluid>
                <b-row>
                  <b-col class="mb-3">
                    <h6>Metadata</h6>
                    <span class="font-italic">Before publishing the course, meta data need to be inserted.</span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="mb-2">
                    <b-card no-body>
                      <b-tabs card>
                        <b-tab no-body title="LIFECYCLE">
                          <b-container>
                            <b-row>
                              <b-col>
                                <b-card class="my-3" no-body>
                                  <b-card-body>
                                    <b-card-text>
                                      <b-container>
                                        <b-row>
                                          <b-col class="mb-3">
                                            <h5>Structure</h5>
                                            <span>Description</span>
                                          </b-col>
                                          <b-col class="mb-3">
                                            <span>SOURCE</span><br>
                                            <b-dropdown class="mt-2" id="dropdown-1" text="SLHw">
                                              <b-dropdown-item>First Action</b-dropdown-item>
                                              <b-dropdown-item>Second Action</b-dropdown-item>
                                              <b-dropdown-item>Third Action</b-dropdown-item>
                                            </b-dropdown>
                                          </b-col>
                                          <b-col class="mb-3">
                                            <span>STATE</span><br>
                                            <b-dropdown class="mt-2" id="dropdown-1" text="SLHw">
                                              <b-dropdown-item>First Action</b-dropdown-item>
                                              <b-dropdown-item>Second Action</b-dropdown-item>
                                              <b-dropdown-item>Third Action</b-dropdown-item>
                                            </b-dropdown>
                                          </b-col>
                                        </b-row>
                                      </b-container>
                                    </b-card-text>
                                  </b-card-body>
                                </b-card>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-card class="my-3" no-body>
                                  <b-card-body>
                                    <b-card-text>
                                      <b-container>
                                        <b-row>
                                          <b-col class="mb-3">
                                            <h5>Structure</h5>
                                            <span>Description</span>
                                          </b-col>
                                          <b-col class="mb-3">
                                            <span>SOURCE</span><br>
                                            <b-dropdown class="mt-2" id="dropdown-1" text="SLHw">
                                              <b-dropdown-item>First Action</b-dropdown-item>
                                              <b-dropdown-item>Second Action</b-dropdown-item>
                                              <b-dropdown-item>Third Action</b-dropdown-item>
                                            </b-dropdown>
                                          </b-col>
                                          <b-col class="mb-3">
                                            <span>STATE</span><br>
                                            <b-dropdown class="mt-2" id="dropdown-1" text="SLHw">
                                              <b-dropdown-item>First Action</b-dropdown-item>
                                              <b-dropdown-item>Second Action</b-dropdown-item>
                                              <b-dropdown-item>Third Action</b-dropdown-item>
                                            </b-dropdown>
                                          </b-col>
                                        </b-row>
                                      </b-container>
                                    </b-card-text>
                                  </b-card-body>
                                </b-card>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-tab>
                        <b-tab no-body title="TECHNICAL">
                        </b-tab>
                        <b-tab no-body title="EDUCATIONAL">
                        </b-tab>
                        <b-tab title="ANNOTATION">
                        </b-tab>
                      </b-tabs>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </b-card-text>
          </b-card-body>
        </b-card>-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faCog, faPen, faSave, faTrash} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {VueEditor} from "vue2-editor";
  import VueTagsInput from '@johmun/vue-tags-input';
  import {mapActions, mapState} from "vuex";
  import {bus} from "@/main";

  library.add(
    faPen,
    faTrash,
    faCog,
    faSave
  );

  export default {
    name: "EditLesson",
    data() {
      return {
        meta:{
          intervalId: '',
          tag: '',
          isEditing: false,
        },
        selectedLesson:{}
      }
    },
    computed:{
      ...mapState('lesson', ['currentLesson', 'lessons']),
      ...mapState('module' , ['currentModule']),
    },
    methods: {
      ...mapActions('lesson', {
        createLesson:'createLesson',
        setSelectedLesson: 'setSelectedLesson',
        updateLessonState: 'updateLessonState',
        updateLesson: 'updateLesson',
        loadLesson:'loadLesson'}),

      ...mapActions('module', {updateModule:'updateModule'}),
      //  Initialize Lesson content on creation
      async initLessonContent() {
        let
          newLesson = null,
          id = this.$route.params.id,
          hasElement = this.currentModule.contentIndex.hasOwnProperty(id),
          moduleContentIndex = this.currentModule.contentIndex,
          contentLength = Object.keys(moduleContentIndex).length,
          foundLesson = this.lessons.findIndex(el => {
            return el.uuid === id
          });

        if (!hasElement) {
          newLesson = {
            uuid: id,
            title: "New Lesson",
            type: "Lesson",
            description: "",
            tags:[],
            content:""
          };
          // Create a lesson
          await this.createLesson(newLesson);
          //update Module Index
          moduleContentIndex[id] = contentLength;
          await this.updateModule({

            targetModule: this.currentModule.uuid,
            props: {
              contentIndex: moduleContentIndex
            }
          });
        } else {
          if(foundLesson!==-1)
          this.setSelectedLesson(id);
          else
          {  await this.loadLesson(id).then(()=>{
            this.setSelectedInteraction(id);
          });
          }
        }
      },
      updateTags(newTags){
        this.selectedLesson.tags = newTags;
        this.updateLessonState({
          targetLesson: this.selectedLesson.uuid,
          props: {
            tags: newTags
          }
        });
      },
      toggleTitleInput() {
        this.selectedLesson.title = this.$refs['lessonTitle'].value;
        this.meta.isEditing = !this.meta.isEditing;
      },

      async saveLessonInDB() {
        let lessonID = this.selectedLesson.uuid,
          lessonContent = {...this.selectedLesson};
        const isSaved = await this.updateLesson({
          targetLesson: lessonID,
          props: lessonContent
        });
        bus.$emit('element-saved', isSaved);
      }
    },

    components: {
      'font-awesome-icon': FontAwesomeIcon,
      VueEditor,
      VueTagsInput,
    },
    watch:{
      selectedLesson:{
        handler:function(val){
        this.updateLessonState({
          targetLesson: this.selectedLesson.uuid,
          props: val
        });},
        deep: true
      }
    },
    created(){
      this.initLessonContent();
      // save every x minute : set in .env
       this.selectedLesson = this.currentLesson
      this.meta.intervalId = setInterval(this.saveLessonInDB, parseInt(process.env.VUE_APP_SAVE_INTERVAL) * 60000);
    },
    beforeDestroy() {
      clearInterval(this.meta.intervalId);
      this.saveLessonInDB();
    },
  };
</script>

<style scoped>
  .view {
    border-color: transparent;
    background-color: initial;
    color: initial
  }
</style>

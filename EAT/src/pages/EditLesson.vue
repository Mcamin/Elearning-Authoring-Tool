<template>
  <b-container  class="h-100 mt-5">
    <SettingsCard :meta="lessonMeta"/>
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
  import SettingsCard from "@/components/Cards/SettingsCard";
  library.add(
    faPen,
    faTrash,
    faCog,
    faSave
  );

  export default {
    name: "EditLesson",
    components: {
      'font-awesome-icon': FontAwesomeIcon,
      VueEditor,
      VueTagsInput,
      SettingsCard
    },
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
      lessonMeta(){
        return {title:this.currentLesson.title,description: this.currentLesson.description,tags:this.currentLesson.tags}
      },
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
        console.log(newTags);
        let tagsArray = newTags.map(a => a.text);
          this.selectedLesson.tags =tagsArray;
        this.updateLessonState({
          targetLesson: this.selectedLesson.uuid,
          props: {
            tags: this.selectedLesson.tags
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
      this.initLessonContent().then(()=>{
        this.selectedLesson = this.currentLesson
      });
      // save every x minute : set in .env
      this.meta.intervalId = setInterval(this.saveLessonInDB, parseInt(process.env.VUE_APP_SAVE_INTERVAL) * 60000);
    },
    beforeDestroy() {
      clearInterval(this.meta.intervalId);
      this.saveLessonInDB();
    },
  };
</script>


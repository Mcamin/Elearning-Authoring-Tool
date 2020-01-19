<template>
  <b-container class="mt-3">
    <b-row align-v="center">
      <b-col align-self="center">
        <!--HTML Card-->
        <b-card class="mb-5" no-body>
          <b-card-body>
            <b-card-text>
              <b-container fluid>
                <b-row>
                  <b-col class="mb-3">
                    <input :class="{view: !isEditing}" :disabled="!isEditing" :value="lesson.title" ref="lesson_title" type="text" v-on:keyup.enter="toggleTitleInput">
                    <a class="ml-2" href="#">
                      <font-awesome-icon :icon="['fas', 'pen']" @click="isEditing = !isEditing" size="lg" v-if="!isEditing"/>
                      <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="xs" v-else-if="isEditing"/>
                    </a>
                    <a class="ml-2" href="#">
                      <font-awesome-icon :icon="['fas', 'trash']" size="lg"/>
                    </a>
                    <a class="ml-2" href="#">
                      <font-awesome-icon :icon="['fas', 'cog']" size="lg"/>
                    </a>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="mb-5">
                    <div>
                      <vue-tags-input
                        v-model="tag"
                        :tags="tags"
                        :allow-edit-tags="true"
                        @tags-changed="newTags => tags = newTags"
                      />
                    </div>
                  </b-col>
                </b-row>
              </b-container>
              <vue-editor v-model="content"></vue-editor>
            </b-card-text>
          </b-card-body>
        </b-card>
        <!--Metadata Card-->
        <b-card class="mb-5" no-body>
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
  import {Button, Input, Tag} from 'element-ui'
  import VueTagsInput from '@johmun/vue-tags-input';

  library.add(
    faPen,
    faTrash,
    faCog,
    faSave
  );

  import {bus} from "../main";
  import {mapActions} from "vuex";

  export default {
    name: "AddLesson",
    data() {
      return {
        tag:'',
        tags: [],
        inputVisible: false,
        inputValue: '',
        isEditing: false,
        lesson: {
          title: 'LessonTitle'
        }
      };
    },
    methods: {
      ...mapActions([
        'saveLesson'
      ]),
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      toggleTitleInput() {
        this.lesson.title = this.$refs['lesson_title'].value;
        this.isEditing = !this.isEditing;
      }
    },
    components: {
      'font-awesome-icon': FontAwesomeIcon,
      VueEditor,
      Tag,
      Input,
      Button,
      VueTagsInput,
    },
    created() {
      bus.$on('saveLesson',()=>{
       const payload = this.lesson ;
        this.saveLesson(payload);

      });
    }
  }
</script>

<style scoped>
  .view {
    border-color: transparent;
    background-color: initial;
    color: initial
  }
</style>

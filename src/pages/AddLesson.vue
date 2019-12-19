<template>
    <b-container class="mt-3">
      <b-row align-v="center">
        <b-col   align-self="center">
          <!--HTML Card-->
         <b-card no-body  class="mb-5">
              <b-card-body>

                <b-card-text>
                  <b-container fluid>
                    <b-row>
                      <b-col class="mb-3">
                        <span class="h4">Lesson Title</span>
                        <a href="#" class="ml-2">
                          <font-awesome-icon :icon="['fas', 'pen']" size="xs"  />
                        </a>
                        <a href="#" class="ml-2">
                          <font-awesome-icon :icon="['fas', 'trash']" size="xs"  />
                        </a>
                        <a href="#" class="ml-2">
                          <font-awesome-icon :icon="['fas', 'cog']" size="xs"  />
                        </a>
                      </b-col>

                    </b-row>
                    <b-row>
                      <b-col class="mb-5">
                        <el-tag
                          :key="tag"
                          v-for="tag in dynamicTags"
                          closable
                          :disable-transitions="false"
                          @close="handleClose(tag)">
                          {{tag}}
                        </el-tag>
                        <el-input
                          class="input-new-tag"
                          v-if="inputVisible"
                          v-model="inputValue"
                          ref="saveTagInput"
                          size="mini"
                          @keyup.enter.native="handleInputConfirm"
                          @blur="handleInputConfirm"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>


                      </b-col>

                    </b-row>
                  </b-container>


                  <vue-editor v-model="content"></vue-editor>

                </b-card-text>
              </b-card-body>





            </b-card>

          <!--Metadata Card-->
          <b-card no-body class="mb-5">
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
                              <b-row >

                                <b-col>
                                  <b-card no-body  class="my-3">
                                    <b-card-body>

                                      <b-card-text>
                                        <b-container>
                                          <b-row>
                                            <b-col class="mb-3">
                                              <h5 >Structure</h5>
                                              <span>Description</span>
                                            </b-col>
                                            <b-col class="mb-3">
                                              <span>SOURCE</span><br>
                                              <b-dropdown id="dropdown-1" text="SLHw" class="mt-2">
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>Second Action</b-dropdown-item>
                                                <b-dropdown-item>Third Action</b-dropdown-item>
                                              </b-dropdown>
                                            </b-col>
                                            <b-col class="mb-3">
                                              <span>STATE</span><br>
                                              <b-dropdown id="dropdown-1" text="SLHw" class="mt-2">
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
                              <b-row >

                                <b-col>
                                  <b-card no-body  class="my-3">
                                    <b-card-body>

                                      <b-card-text>
                                        <b-container>
                                          <b-row>
                                            <b-col class="mb-3">
                                              <h5 >Structure</h5>
                                              <span>Description</span>
                                            </b-col>
                                            <b-col class="mb-3">
                                              <span>SOURCE</span><br>
                                              <b-dropdown id="dropdown-1" text="SLHw" class="mt-2">
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>Second Action</b-dropdown-item>
                                                <b-dropdown-item>Third Action</b-dropdown-item>
                                              </b-dropdown>
                                            </b-col>
                                            <b-col class="mb-3">
                                              <span>STATE</span><br>
                                              <b-dropdown id="dropdown-1" text="SLHw" class="mt-2">
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
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faPen, faTrash,faCog,faSortUp,faSortDown ,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { VueEditor } from "vue2-editor";
    import {Tag,Button,Input} from 'element-ui'

    library.add(
        faPen,
        faTrash,
        faCog,
    );

  export default {
        name: "AddLesson",
      data() {
          return {
              dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
              inputVisible: false,
              inputValue: ''
          };
      },
      methods: {
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
          }

  },
      components:{
          'font-awesome-icon': FontAwesomeIcon,
          VueEditor,
          Tag,
          Input,
          Button

      }
    }
</script>

<style scoped>

</style>

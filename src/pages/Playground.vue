<template>
    <b-container class="mt-3">
      <b-row align-v="center">
        <b-col   align-self="center">
            <b-card
              no-body>
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
                      <b-col class="mb-3">
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

        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faPen, faTrash,faCog,faSortUp,faSortDown ,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { VueEditor } from "vue2-editor";
    import {Tag} from 'element-ui'

    library.add(
        faPen,
        faTrash,
        faCog,
    );

  export default {
        name: "Playground",
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
          [Tag.name]: Tag

      }
    }
</script>

<style scoped>

</style>

<template>
      <b-modal id="modal-new-course" centered title="Create new course:" hide-footer size="lg">
            <div>
              <b-form @submit.prevent="handleSubmit" @reset.prevent="handleReset" v-if="show">

                <!-- Title of Course-->
                <b-form-group id="input-group-1" label="Title:" label-for="input-title">
                  <b-form-input
                    id="input-title"
                    v-model="formData.title"
                    required
                    placeholder="Web Development"
                  />
                </b-form-group>

                <!-- Description of Course-->
                <b-form-group id="input-group-2" label="Description" label-for="input-description">
                  <b-form-textarea
                    id="input-description"

                    v-model="formData.description"
                    required
                    rows="2"
                    max-rows="6"
                    placeholder="This course is..."
                  />
                </b-form-group>

                <!-- Tags of Course -->
                <b-form-group id="input-group-5" label="Tags" label-for="input-5">
                  <vue-tags-input
                    v-model="tag"
                    :tags="formData.tags"
                    :allow-edit-tags="true"
                    @tags-changed="newTags => tags = newTags"
                  />
                </b-form-group>


                <!-- Language selection -->
                <b-form-group id="input-group-4" label="Language:" label-for="input-4">
                  <b-form-select
                    id="input-language"
                    v-model="selected"

                    :options="language"
                    required
                  />
                </b-form-group>


                <!-- Upload -->

                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                </el-upload>

                <!-- Submit button with route to /titleOfCourse -->
                <router-link :to="{ name: 'newcourse', params: {title: formData.title } }" type="submit" variant="primary" @click.native="handleSubmit"><b-button>Submit</b-button></router-link>

                <!-- Reset button -->
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </div>
      </b-modal>
</template>
<script>

  import {mapState, mapActions, ActionContext as store} from 'vuex';
  import newcourse from "../../data/coursesArray";
  import { Input, Tag } from 'element-ui'
  import VueTagsInput from '@johmun/vue-tags-input';



  export default {
        data() {
          return {
            tag:'',
            formData: {
              title: '',
              description: '',
              tags: [],

              inputVisible: false,
              inputValue: '',
              isEditing: false,
              language: [],
            },
            selected: null,
            language: [
              { value: null, text: 'Please select a language' },
              { text: 'English'},
              { text: 'German'},
              { text: 'Russian'}
              ],
            show: true
          }
        },
      components: {
          VueTagsInput,
        },

        methods: {
          ...mapActions([
            'addCourse',
           'saveTemporaryCourse'
          ]),
          handleSubmit() {

            const { title, description, tags, language } = this.formData
            const payload = {
                title,
                description,
                tags,
                language,
                sections: [{title:"New Section"}]
            };
            this.addCourse(payload);
            this.saveTemporaryCourse(payload);


          },
          handleReset() {
            // Reset our form values
            this.form.title = ''
            this.form.description = ''
            this.form.tags = []
            this.form.language = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
              this.show = true
            })
          },
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
        computed : {
          ...mapState([
            'courses'
          ])
        }
    };
</script>
<style>
</style>

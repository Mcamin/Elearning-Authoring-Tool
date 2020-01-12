<template>
      <b-modal id="modal-new-course" centered title="Create new course:" hide-footer size="lg">
            <div>
              <b-form @submit.prevent="handleSubmit" @reset.prevent="handleReset" v-if="show">
                <!-- Title of Course -->
                <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="formData.title"
                    required
                    placeholder="Web Development"
                  />
                </b-form-group>
                <!-- Description of Course -->
                <b-form-group id="input-group-2" label="Description" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="formData.description"
                    required
                    placeholder="This course is..."
                  />
                </b-form-group>

                <!-- Tags of Course -->
                <b-form-group id="input-group-3" label="Tags" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="formData.tags"
                    placeholder="Web,HTML,Angular"
                    required
                  />
                </b-form-group>

                <!-- Language selection -->
                <b-form-group id="input-group-4" label="Language:" label-for="input-4">
                  <b-form-select
                    id="input-4"
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
  import {mapState, mapActions, ActionContext as store} from 'vuex'
  import newcourse from "../../data/coursesArray";

  export default {
        data() {
          return {
            formData: {
              title: '',
              description: '',
              tags: '',
              language: [],
              sections: []
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

        methods: {
          ...mapActions([
            'addCourse'
          ]),
          handleSubmit() {
            const { title, description, tags, language, sections } = this.formData
            const payload = {
              course: {
                title,
                description,
                tags,
                language,
                sections
              }
            }
            this.addCourse(payload)
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

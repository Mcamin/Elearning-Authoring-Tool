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

                <!-- Tags of Course-->
                <b-form-group id="input-group-3" label="Tags" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="formData.tags"
                    placeholder="Web,HTML,Angular"
                    required
                  />
                </b-form-group>

                <b-form-group id="input-group-4" label="Language:" label-for="input-language">
                  <b-form-select
                    id="input-language"
                    v-model="formData.language"
                    :options="language"
                    required
                  />
                </b-form-group>
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

                <router-link :to="{ name: 'newcourse', params: {title: formData.title } }" type="submit" variant="primary" @click.native="handleSubmit"><b-button>Submit</b-button></router-link>

                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </div>
      </b-modal>
</template>
<script>
  import Upload from 'element-ui'
  import {mapState, mapActions} from 'vuex'

  export default {
        data() {
          return {
            formData: {
              title: '',
              description: '',
              tags: [],
              language:"",
            },
            language: [{ text: 'Select One' }, 'English', 'German', 'Russian'],
            show: true
          }
        },
  components: {
          Upload,
  },
        methods: {
          ...mapActions([
            'addCourse'
          ]),
          handleSubmit() {
            const { title, description, tags, language} = this.formData;
            const payload = {
                title,
                description,
                tags,
                language
            };
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

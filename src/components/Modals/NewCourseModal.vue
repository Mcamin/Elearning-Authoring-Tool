<template>
      <b-modal
        id="modal-new-course"
        centered title="Create new course:"
        hide-footer size="lg">
            <div>
              <b-form @submit.prevent="handleSubmit"  v-if="show">

                <!-- Title of Course-->
                <b-form-group id="input-group-title" label="Title:" label-for="input-title">
                  <b-form-input
                    id="input-title"
                    v-model="formData.title"
                    required
                    placeholder="Web Development"
                  />
                </b-form-group>
                <!-- End Title of Course-->

                <!-- Description of Course-->
                <b-form-group id="input-group-desc" label="Description" label-for="input-description">
                  <b-form-textarea
                    id="input-description"
                    v-model="formData.description"
                    required
                    rows="2"
                    max-rows="6"
                    placeholder="This course is..."
                  />
                </b-form-group>
                <!-- End Description of Course-->

                <!-- Category selection -->
                <b-form-group id="input-group-category" label="Category:" label-for="input-category">
                  <b-form-select
                    id="input-category"
                    v-model="formData.languageSelected"
                    :options="language"
                    required
                  />
                </b-form-group>
                <!-- End Category selection -->

                <!-- Tags of the Course -->
                <b-form-group id="input-group-tags" label="Tags" label-for="input-tags">
                  <vue-tags-input
                    v-model="tag"
                    :tags="formData.tags"
                    :allow-edit-tags="true"
                    @tags-changed="newTags => formData.tags = newTags"
                  />
                </b-form-group>
                <!-- End Tags of the Course -->

                <!-- Language selection -->
                <b-form-group id="input-group-languages" label="Language:" label-for="input-4">
                  <b-form-select
                    id="input-language"
                    v-model="formData.languageSelected"
                    :options="language"
                    required
                  />
                </b-form-group>
                <!-- End Language selection -->

                <!-- Upload Thumbnail -->
                  <el-upload
                    drag
                    class="upload-wrapper text-center"
                    action=""
                    :file-list="formData.courseImage"
                    :limit=1
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Drop the image here or <em>click to upload</em></div>
                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 1MB</div>
                  </el-upload>
                <!-- End Upload Thumbnail -->

                 <!-- Buttons -->
                <b-container fluid class="px-0 mt-3" >
                   <b-row class="h-100 d-flex align-content-center mx-auto">
                     <b-button class="mr-auto">Advanced Settings</b-button>
                     <b-button class="mx-2">Cancel</b-button>
                     <router-link :to="{ name: 'edit-course', params: {id: formData.id, title: formData.title } }" type="submit"  @click.native="handleSubmit">
                       <b-button>Create Course</b-button>
                     </router-link>
                   </b-row>
                </b-container>
                <!-- Buttons -->
              </b-form>
            </div>
      </b-modal>
</template>
<script>

  import {mapState, mapActions} from 'vuex';
  import { Input, Tag } from 'element-ui'
  import VueTagsInput from '@johmun/vue-tags-input';
  import { uuid } from 'vue-uuid';

  export default {
      components: {
        VueTagsInput,
      },
      data() {
        return {
          tag:'',
          formData: {
            id:uuid.v1(),
            title: '',
            description: '',
            tags:[],
            inputVisible: false,
            inputValue: '',
            isEditing: false,
            languageSelected: null,
            courseImage
      :[]
          },
          language: [
            { value: null, text: 'Please select a language' },
            'English',
            'German',
            'Russian'
            ],
          show: true,
        }
      },
      methods: {
        ...mapActions([
          'createCourse'
        ]),
        handleSubmit() {

          const { id,title, description, tags, languageSelected, courseImage } = this.formData;
          let tagstext = tags.map(tmpTag=> {
            return tmpTag.text}),
              sectionID ="s-"+uuid.v1();
          const payload= {
              id,
              title,
              description,
              tagstext,
              languageSelected,
              thumbnail:{filename:"",path:courseImage},
              contentIndex:{[sectionID]:0},
              content: [{id:sectionID,
                title:"New Section"}]
          };
          this.addSection({id:sectionID, title:"New Section"});
          this.addCourse(payload);
          this.saveTemporaryCourse(payload);
        },
        handleReset() {

          // Reset our form values
          this.form.title = '';
          this.form.description = '';
          this.form.tags = [];
          this.form.newTag = [];
          this.form.language = '';
          this.form.courseImage=[];
          // Trick to reset/clear native browser form validation state
          this.show = false;
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

    };
</script>
<style  lang="sass">
  .form-control, .custom-select
    &:focus
      border-color: #219678
      box-shadow: 0 0 0 0.2rem rgba(33,150,120, 0.25)
  .vue-tags-input
    max-width: 100%
    .ti-tag
      background-color: #219678
    .ti-input
      border-radius: 0.25rem
      &:focus
        border-color: #219678
        box-shadow: 0 0 0 0.2rem rgba(33,150,120, 0.25)
  .upload-wrapper
      .el-upload
        width: 100%
        .el-upload-dragger
          width: 100%
          &:hover
            border-color: #219678
          .el-upload__text em
            color: #219678
</style>
